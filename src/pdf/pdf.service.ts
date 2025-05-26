import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PdfService {
  constructor(private prisma: PrismaService) {}

  private extractFuncionarios(pdfText: string) {
    const funcionarios = [];
    const lines = pdfText.split('\n');

    const regex =
      /^(\d{6})([A-Z\sÇÃÕÉÊÁÍÓÚàéíóúâêôçãõ'-]+)(\d{2}\/\d{2}\/\d{4})(.+?)(\d{1,3}(?:\.\d{3})*,\d{2})$/;

    for (const line of lines) {
      const match = line.match(regex);
      if (match) {
        const [, codigo, nome, dataAdmissao, cargoRaw, salarioRaw] = match;

        let cargo = cargoRaw.replace(salarioRaw, '').trim();
        let salario = salarioRaw;

        const matchN = cargo.match(/N\s*$/);
        if (matchN) {
          const nivel = salarioRaw.match(/^(\d)/)?.[1];
          if (nivel) {
            cargo += nivel;
            salario = salarioRaw.replace(nivel, '').trim();
          }
        }

        funcionarios.push({
          codigo: codigo.trim(),
          nome: nome.trim(),
          cargo: cargo.replace(/\s+/g, ' '),
          salario: parseFloat(salario.replace(/\./g, '').replace(',', '.')),
          dataAdmissao: new Date(dataAdmissao.split('/').reverse().join('-')),
        });
      }
    }

    return funcionarios;
  }

  async extractFuncionariosForCreated(pdfText: string, codeCompany: number) {
    if (!codeCompany) {
      return {
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Company code is required',
      };
    }

    const [company, funcionarios] = await Promise.all([
      this.prisma.company.findUnique({ where: { id: codeCompany } }),
      Promise.resolve(this.extractFuncionarios(pdfText)),
    ]);

    if (!company) {
      return {
        statusCode: HttpStatus.NOT_FOUND,
        message: `Company with ID ${codeCompany} not found`,
      };
    }

    if (funcionarios.length === 0) {
      return {
        statusCode: HttpStatus.NOT_FOUND,
        message: 'No employees found in the PDF',
      };
    }

    const codigos = funcionarios.map((f) => f.codigo);
    const existing = await this.prisma.employee.findMany({
      where: { code_employee: { in: codigos } },
    });

    const existingSet = new Set(existing.map((e) => e.code_employee));
    const toInsert = funcionarios.filter((f) => !existingSet.has(f.codigo));

    const reativar = existing.filter((e) => !e.enabled);

    await Promise.all(
      reativar.map((employee) =>
        this.prisma.employee.update({
          where: { code_employee: employee.code_employee },
          data: {
            enabled: true,
            name: employee.name,
            job_description: employee.job_description,
            salary: employee.salary,
            code_company: codeCompany,
          },
        }),
      ),
    );

    const insertResult = await this.prisma.employee.createMany({
      data: toInsert.map((f) => ({
        code_employee: f.codigo,
        name: f.nome,
        job_description: f.cargo,
        salary: f.salario,
        code_company: codeCompany,
        enabled: true,
      })),
    });

    return {
      statusCode: HttpStatus.CREATED,
      existingEmployees: existing.length,
      insertedEmployees: insertResult.count,
      reactivatedEmployees: reativar.length,
      message: `${insertResult.count} employees inserted successfully`,
    };
  }

  async extractFuncionariosForInactive(pdfText: string) {
    const [funcionarios] = await Promise.all([
      Promise.resolve(this.extractFuncionarios(pdfText)),
    ]);

    if (funcionarios.length === 0) {
      return {
        statusCode: HttpStatus.NOT_FOUND,
        message: 'No employees found in the PDF',
      };
    }

    const codigos = funcionarios.map((f) => f.codigo);

    const [countUpdate] = await Promise.all([
      this.prisma.employee.updateMany({
        where: { code_employee: { in: codigos } },
        data: { enabled: false },
      }),
      Promise.all([
        this.prisma.snack.deleteMany({
          where: { code_employee: { in: codigos } },
        }),
        this.prisma.ticket.deleteMany({
          where: { employee: { code_employee: { in: codigos } } },
        }),
        this.prisma.absence.deleteMany({
          where: { code_employee: { in: codigos } },
        }),
      ]),
    ]);

    return {
      statusCode: HttpStatus.OK,
      inactiveEmployees: codigos.length,
      message: `${countUpdate.count} employees marked as inactive successfully`,
    };
  }
}
