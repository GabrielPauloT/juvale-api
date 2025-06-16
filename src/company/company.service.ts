import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { getDaysInMonth, isWeekend } from 'date-fns';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) {}
  async create(createCompanyDto: CreateCompanyDto) {
    const data = await this.prisma.company.create({
      data: createCompanyDto,
    });
    return {
      data,
      statusCode: HttpStatus.CREATED,
      message: 'Company created successfully',
    };
  }

  async findAll(page?: number, perPage?: number, name?: string) {
    const skip = page ? (page - 1) * perPage : 0;
    const take = perPage || 10;
    const data = await this.prisma.company.findMany({
      skip,
      take,
      where: {
        name: name ? { contains: name, mode: 'insensitive' } : undefined,
      },
    });

    const countCompany = await this.prisma.company.count({
      where: {
        name: name ? { contains: name, mode: 'insensitive' } : undefined,
      },
    });

    return {
      data,
      page: page || 1,
      perPage: perPage || 10,
      totalRecords: countCompany,
      totalPages: Math.ceil(countCompany / (perPage || 10)),
      statusCode: HttpStatus.OK,
      message: 'Companies retrieved successfully',
    };
  }

  async findAllEmployeeCostByCompany(date?: string) {
    const companies = await this.prisma.company.findMany({
      select: {
        id: true,
        name: true,
        employee: {
          where: { enabled: true },
          select: {
            code_employee: true,
            name: true,
            salary: true,
            snack: {
              select: { value: true },
            },
            ticket: {
              select: { value: true },
            },
            absence: {
              select: {
                absence_date: true,
              },
            },
          },
        },
      },
    });

    const dateSelected = date ? new Date(date) : new Date();
    const selectedMonth = dateSelected.getMonth();
    const selectedYear = dateSelected.getFullYear();

    const totalDiasNoMes = getDaysInMonth(dateSelected);
    const diasUteis = Array.from({ length: totalDiasNoMes }, (_, i) => {
      const date = new Date(selectedYear, selectedMonth, i + 1);
      return !isWeekend(date);
    }).filter(Boolean).length;

    const result = companies.map((company) => {
      let totalVT = 0;
      let totalVR = 0;
      const totalFuncionariosAtivos = company.employee.length;

      company.employee.forEach((employee) => {
        const valorDiarioVT = employee.ticket.reduce(
          (sum, ticket) => sum + Number(ticket.value),
          0,
        );

        const valorDiarioVR = employee.snack.reduce(
          (sum, snack) => sum + Number(snack.value),
          0,
        );

        const faltasNoMes = employee.absence.filter((absence) => {
          const dataFalta = new Date(absence.absence_date);
          return (
            dataFalta.getMonth() === selectedMonth &&
            dataFalta.getFullYear() === selectedYear
          );
        }).length;

        const valorVT = valorDiarioVT * diasUteis - valorDiarioVT * faltasNoMes;
        totalVT += valorVT;

        const valorVR = valorDiarioVR * diasUteis - valorDiarioVR * faltasNoMes;
        totalVR += valorVR;
      });

      return {
        nameCompany: company.name,
        totalVT,
        totalVR,
        totalFuncionariosAtivos,
      };
    });

    return {
      data: result,
      statusCode: HttpStatus.OK,
      message: 'Employee costs by company retrieved successfully',
    };
  }

  async findOne(id: number) {
    const data = await this.prisma.company.findUnique({
      where: { id },
    });
    if (!data) {
      return {
        statusCode: HttpStatus.NOT_FOUND,
        message: 'Company not found',
      };
    }
    return {
      data,
      statusCode: HttpStatus.OK,
      message: 'Company retrieved successfully',
    };
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto) {
    const existingCompany = await this.prisma.company.findUnique({
      where: { id },
    });
    if (!existingCompany) {
      return {
        statusCode: HttpStatus.NOT_FOUND,
        message: 'Company not found',
      };
    }
    const data = await this.prisma.company.update({
      where: { id },
      data: {
        ...updateCompanyDto,
        last_modified: new Date(),
      },
    });
    return {
      data,
      statusCode: HttpStatus.OK,
      message: 'Company updated successfully',
    };
  }
}
