import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { getDaysInMonth, isWeekend, format } from 'date-fns';
import * as path from 'path';
import * as fs from 'fs';
import * as PDFDocument from 'pdfkit';
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
      this.prisma.client.company.findUnique({ where: { id: codeCompany } }),
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
    const existing = await this.prisma.client.employee.findMany({
      where: { code_employee: { in: codigos } },
    });

    const existingSet = new Set(existing.map((e) => e.code_employee));
    const toInsert = funcionarios.filter((f) => !existingSet.has(f.codigo));

    const reativar = existing.filter((e) => !e.enabled);

    await Promise.all(
      reativar.map((employee) =>
        this.prisma.client.employee.update({
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

    const insertResult = await this.prisma.client.employee.createMany({
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
      this.prisma.client.employee.updateMany({
        where: { code_employee: { in: codigos } },
        data: { enabled: false },
      }),
      Promise.all([
        this.prisma.client.snack.deleteMany({
          where: { code_employee: { in: codigos } },
        }),
        this.prisma.client.ticket.deleteMany({
          where: { employee: { code_employee: { in: codigos } } },
        }),
        this.prisma.client.absence.deleteMany({
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

  async generateCompanyCostReport(date?: string): Promise<Buffer> {
    const companies = await this.prisma.client.company.findMany({
      select: {
        name: true,
        employee: {
          where: { enabled: true },
          select: {
            salary: true,
            ticket: { select: { value: true } },
            snack: { select: { value: true } },
            absence: { select: { absence_date: true } },
          },
        },
      },
    });

    const dateSelected = date ? new Date(date) : new Date();
    const selectedMonth = dateSelected.getMonth();
    const selectedYear = dateSelected.getFullYear();
    const diasUteis = Array.from(
      { length: getDaysInMonth(dateSelected) },
      (_, i) => {
        const d = new Date(selectedYear, selectedMonth, i + 1);
        return !isWeekend(d);
      },
    ).filter(Boolean).length;

    const doc = new PDFDocument({ margin: 50 });
    const buffers: Buffer[] = [];

    this.insertBackgroundImage(doc);

    doc.on('data', buffers.push.bind(buffers));
    doc.on('end', () => {});

    doc
      .fontSize(18)
      .text('Relatório de Gastos por Empresa', { align: 'center' })
      .moveDown(2);

    let totalGeral = 0;

    for (const company of companies) {
      let totalVR = 0;
      let totalVT = 0;

      for (const emp of company.employee) {
        const faltas = emp.absence.filter((a) => {
          const d = new Date(a.absence_date);
          return (
            d.getMonth() === selectedMonth && d.getFullYear() === selectedYear
          );
        }).length;

        const vr = emp.snack.reduce((s, i) => s + Number(i.value), 0);
        const vt = emp.ticket.reduce((s, i) => s + Number(i.value), 0);

        totalVR += vr * (diasUteis - faltas);
        totalVT += vt * (diasUteis - faltas);
      }
      const total = totalVR + totalVT;
      totalGeral += total;

      doc.fontSize(14).text(`Empresa: ${company.name}`).moveDown(0.5);

      doc.fontSize(12);
      doc.text(
        `Total Vale Refeição (VR): R$ ${totalVR.toFixed(2).replace('.', ',')}`,
      );
      doc.text(
        `Total Vale Transporte (VT): R$ ${totalVT.toFixed(2).replace('.', ',')}`,
      );
      doc.moveDown(1);

      doc.moveDown();
    }

    doc
      .moveDown(1.5)
      .font('Helvetica-Bold')
      .fontSize(12)
      .text(`Total Geral: R$ ${totalGeral.toFixed(2).replace('.', ',')}`, {
        align: 'right',
      });

    doc.end();
    return new Promise((resolve) => {
      doc.on('end', () => {
        const pdfBuffer = Buffer.concat(buffers);
        resolve(pdfBuffer);
      });
    });
  }

  async generateCompanyCostReportByPeriod(
    startDate: string,
    endDate: string,
  ): Promise<Buffer> {
    const start = new Date(startDate);
    start.setDate(start.getDate() + 1);

    const end = new Date(endDate);
    end.setDate(end.getDate() + 1);

    if (start > end) {
      throw new BadRequestException(
        'A data inicial não pode ser maior que a data final',
      );
    }

    const companies = await this.prisma.client.company.findMany({
      select: {
        name: true,
        employee: {
          where: { enabled: true },
          select: {
            salary: true,
            ticket: { select: { value: true, created_at: true } },
            snack: { select: { value: true, created_at: true } },
            absence: { select: { absence_date: true } },
          },
        },
      },
    });

    const doc = new PDFDocument({ margin: 50 });
    const buffers: Buffer[] = [];

    this.insertBackgroundImage(doc);

    doc.on('data', buffers.push.bind(buffers));

    const startDateFormatted = format(start, 'dd/MM/yyyy');
    const endDateFormatted = format(end, 'dd/MM/yyyy');

    const formatCurrency = (value: number) =>
      value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    doc
      .fontSize(18)
      .text(`Relatório de Gastos por Empresa`, { align: 'center' })
      .moveDown(0.5);
    doc
      .fontSize(12)
      .text(`Período: ${startDateFormatted} até ${endDateFormatted}`, {
        align: 'center',
      })
      .moveDown(2);

    let totalGeral = 0;

    for (const company of companies) {
      let totalVR = 0;
      let totalVT = 0;

      for (const emp of company.employee) {
        const faltas = emp.absence.filter((a) => {
          const d = new Date(a.absence_date);
          return d >= start && d <= end;
        }).length;

        const vr = emp.snack
          .filter((s) => {
            const d = new Date(s.created_at);
            return d >= start && d <= end;
          })
          .reduce((sum, item) => sum + Number(item.value), 0);

        const vt = emp.ticket
          .filter((t) => {
            const d = new Date(t.created_at);
            return d >= start && d <= end;
          })
          .reduce((sum, item) => sum + Number(item.value), 0);

        const diasNoPeriodo =
          Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) +
          1;

        const diasUteis = Array.from({ length: diasNoPeriodo }, (_, i) => {
          const d = new Date(start);
          d.setDate(start.getDate() + i);
          return !isWeekend(d);
        }).filter(Boolean).length;

        const diasTrabalhados = Math.max(diasUteis - faltas, 0);

        totalVR += vr * diasTrabalhados;
        totalVT += vt * diasTrabalhados;
      }

      const total = totalVR + totalVT;
      totalGeral += total;

      doc
        .fontSize(14)
        .text(`Empresa: ${company.name}`, { underline: true })
        .moveDown(0.5);

      doc.fontSize(12);
      doc.text(`Total Vale Refeição (VR): ${formatCurrency(totalVR)}`);
      doc.text(`Total Vale Transporte (VT): ${formatCurrency(totalVT)}`);
      doc.text(`Total Geral da Empresa: ${formatCurrency(total)}`);
      doc.moveDown(1);
    }

    doc
      .moveDown(1.5)
      .font('Helvetica-Bold')
      .fontSize(12)
      .text(`TOTAL GERAL DO PERÍODO: ${formatCurrency(totalGeral)}`, {
        align: 'right',
      });

    doc.end();

    return new Promise((resolve) => {
      doc.on('end', () => {
        const pdfBuffer = Buffer.concat(buffers);
        resolve(pdfBuffer);
      });
    });
  }

  async generateEmployeeCostReport(date?: string): Promise<Buffer> {
    const employees = await this.prisma.client.employee.findMany({
      where: { enabled: true },
      orderBy: {
        code_company: 'asc',
      },
      include: {
        company: true,
        snack: { select: { value: true } },
        ticket: { select: { value: true } },
        absence: { select: { absence_date: true } },
      },
    });

    const dateSelected = date ? new Date(date) : new Date();
    const selectedMonth = dateSelected.getMonth();
    const selectedYear = dateSelected.getFullYear();
    const diasUteis = Array.from(
      { length: getDaysInMonth(dateSelected) },
      (_, i) => {
        const d = new Date(selectedYear, selectedMonth, i + 1);
        return !isWeekend(d);
      },
    ).filter(Boolean).length;

    const doc = new PDFDocument({ margin: 40 });
    const buffers: Buffer[] = [];

    this.insertBackgroundImage(doc);

    doc.on('data', buffers.push.bind(buffers));

    doc
      .fontSize(18)
      .text('Relatório de Gastos por Funcionário', { align: 'center' })
      .moveDown(1.5);

    const tableHeaders = [
      'Funcionário',
      'Empresa',
      'Salário',
      'VR',
      'VT',
      'Total',
    ];
    const columnWidths = [150, 100, 70, 70, 70, 70];
    const startX = doc.page.margins.left;
    let y = doc.y;

    function drawRow(y: number, values: string[], isHeader = false) {
      const rowHeight = 30;
      doc.font(isHeader ? 'Helvetica-Bold' : 'Helvetica').fontSize(10);

      values.forEach((text, i) => {
        const x = startX + columnWidths.slice(0, i).reduce((a, b) => a + b, 0);
        doc.rect(x, y, columnWidths[i], rowHeight).stroke();

        doc.text(text, x + 5, y + 5, {
          width: columnWidths[i] - 10,
          align: i < 2 ? 'left' : 'right',
        });
      });

      return y + rowHeight;
    }

    y = drawRow(y, tableHeaders, true);

    let totalGeral = 0;

    for (const emp of employees) {
      const faltas = emp.absence.filter((a) => {
        const d = new Date(a.absence_date);
        return (
          d.getMonth() === selectedMonth && d.getFullYear() === selectedYear
        );
      }).length;

      const vr =
        emp.snack.reduce((s, i) => s + Number(i.value), 0) *
        (diasUteis - faltas);
      const vt =
        emp.ticket.reduce((s, i) => s + Number(i.value), 0) *
        (diasUteis - faltas);
      const total = vr + vt;
      totalGeral += total;

      const rowData = [
        emp.name,
        emp.company.name,
        `R$ ${emp.salary.toFixed(2).replace('.', ',')}`,
        `R$ ${vr.toFixed(2).replace('.', ',')}`,
        `R$ ${vt.toFixed(2).replace('.', ',')}`,
        `R$ ${total.toFixed(2).replace('.', ',')}`,
      ];

      if (y + 25 > doc.page.height - doc.page.margins.bottom) {
        doc.addPage();
        this.insertBackgroundImage(doc);
        y = doc.y;
        y = drawRow(y, tableHeaders, true);
      }

      y = drawRow(y, rowData);
    }

    doc
      .moveDown(1.5)
      .font('Helvetica-Bold')
      .fontSize(12)
      .text(
        `Total Geral: R$ ${totalGeral.toFixed(2).replace('.', ',')}`,
        doc.page.margins.left,
        undefined,
        {
          align: 'right',
          width:
            doc.page.width -
            doc.page.margins.left -
            doc.page.margins.right -
            20,
        },
      );

    doc.end();

    return new Promise((resolve) => {
      doc.on('end', () => {
        const pdfBuffer = Buffer.concat(buffers);
        resolve(pdfBuffer);
      });
    });
  }

  async generateEmployeeCostReportWithAbsences(date?: string): Promise<Buffer> {
    const employees = await this.prisma.client.employee.findMany({
      where: { enabled: true },
      orderBy: { code_company: 'asc' },
      include: {
        company: true,
        snack: { select: { value: true } },
        ticket: { select: { value: true } },
        absence: { select: { absence_date: true } },
      },
    });

    const dateSelected = date ? new Date(date) : new Date();
    const selectedMonth = dateSelected.getMonth();
    const selectedYear = dateSelected.getFullYear();
    const diasUteis = Array.from(
      { length: getDaysInMonth(dateSelected) },
      (_, i) => {
        const d = new Date(selectedYear, selectedMonth, i + 1);
        return !isWeekend(d);
      },
    ).filter(Boolean).length;

    const doc = new PDFDocument({ margin: 40 });
    const buffers: Buffer[] = [];

    this.insertBackgroundImage(doc);

    doc.on('data', buffers.push.bind(buffers));

    doc
      .fontSize(18)
      .text('Relatório de Gastos por Funcionário (com Faltas)', {
        align: 'center',
      })
      .moveDown(1.5);

    const tableHeaders = [
      'Funcionário',
      'Empresa',
      'Salário',
      'VR',
      'VT',
      'Faltas',
      'Total',
    ];
    const columnWidths = [120, 90, 70, 70, 70, 70, 50];
    const startX = doc.page.margins.left;
    let y = doc.y;

    const drawRow = (y: number, values: string[], isHeader = false) => {
      const rowHeight = 30;
      doc.font(isHeader ? 'Helvetica-Bold' : 'Helvetica').fontSize(10);

      values.forEach((text, i) => {
        const x = startX + columnWidths.slice(0, i).reduce((a, b) => a + b, 0);
        doc.rect(x, y, columnWidths[i], rowHeight).stroke();
        doc.text(text, x + 5, y + 5, {
          width: columnWidths[i] - 10,
          align: i < 2 ? 'left' : 'right',
        });
      });

      return y + rowHeight;
    };

    y = drawRow(y, tableHeaders, true);

    let totalGeral = 0;

    for (const emp of employees) {
      const faltas = emp.absence.filter((a) => {
        const d = new Date(a.absence_date);
        return (
          d.getMonth() === selectedMonth && d.getFullYear() === selectedYear
        );
      }).length;

      const vr =
        emp.snack.reduce((s, i) => s + Number(i.value), 0) *
        (diasUteis - faltas);
      const vt =
        emp.ticket.reduce((s, i) => s + Number(i.value), 0) *
        (diasUteis - faltas);
      const total = vr + vt;
      totalGeral += total;

      const rowData = [
        emp.name,
        emp.company.name,
        `R$ ${emp.salary.toFixed(2).replace('.', ',')}`,
        `R$ ${vr.toFixed(2).replace('.', ',')}`,
        `R$ ${vt.toFixed(2).replace('.', ',')}`,
        `${faltas}`,
        `R$ ${total.toFixed(2).replace('.', ',')}`,
      ];

      if (y + 25 > doc.page.height - doc.page.margins.bottom) {
        doc.addPage();
        this.insertBackgroundImage(doc);
        y = doc.y;
        y = drawRow(y, tableHeaders, true);
      }

      y = drawRow(y, rowData);
    }

    doc
      .moveDown(1.5)
      .font('Helvetica-Bold')
      .fontSize(12)
      .text(
        `Total Geral: R$ ${totalGeral.toFixed(2).replace('.', ',')}`,
        doc.page.margins.left,
        undefined,
        {
          align: 'right',
          width:
            doc.page.width -
            doc.page.margins.left -
            doc.page.margins.right -
            20,
        },
      );

    doc.end();

    return new Promise((resolve) => {
      doc.on('end', () => {
        const pdfBuffer = Buffer.concat(buffers);
        resolve(pdfBuffer);
      });
    });
  }

  private insertBackgroundImage(doc: PDFDocument) {
    const pageWidth = doc.page.width;
    const pageHeight = doc.page.height;

    const imageSize = 250;
    const x = (pageWidth - imageSize) / 2;
    const y = (pageHeight - imageSize) / 2;

    const resolvedPath = path.resolve(__dirname, '..', 'logo.png');

    if (fs.existsSync(resolvedPath)) {
      doc.save();
      doc.opacity(0.08);
      doc.image(resolvedPath, x, y, { width: imageSize, height: imageSize });
      doc.opacity(1);
      doc.restore();
    } else {
      console.warn('Logo não encontrada em:', resolvedPath);
    }
  }
}
