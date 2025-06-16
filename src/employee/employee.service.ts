import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { getDaysInMonth, isWeekend } from 'date-fns';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from 'prisma/generated/prisma';

@Injectable()
export class EmployeeService {
  constructor(private prisma: PrismaService) {}
  async create(createEmployeeDto: CreateEmployeeDto) {
    const { codeCompany, codeEmployee } = createEmployeeDto;

    const codeEmployeeExists = await this.prisma.employee.findUnique({
      where: { code_employee: codeEmployee },
    });

    if (codeEmployeeExists) {
      return {
        statusCode: HttpStatus.CONFLICT,
        message: 'Employee code already exists',
      };
    }

    const company = await this.prisma.company.findUnique({
      where: { id: codeCompany },
    });

    if (!company) {
      return {
        statusCode: HttpStatus.NOT_FOUND,
        message: 'Company not found',
      };
    }

    const data = await this.prisma.employee.create({
      data: {
        code_employee: createEmployeeDto.codeEmployee,
        name: createEmployeeDto.name,
        job_description: createEmployeeDto.jobDescription,
        salary: createEmployeeDto.salary,
        enabled: true,
        company: {
          connect: { id: company.id },
        },
      },
    });
    return {
      data,
      statusCode: HttpStatus.CREATED,
      message: 'Employee created successfully',
    };
  }

  async createBatch(createEmployeeDtos: CreateEmployeeDto[]) {
    const employees = await Promise.all(
      createEmployeeDtos.map(async (dto) => {
        const { codeCompany, codeEmployee } = dto;

        const codeEmployeeExists = await this.prisma.employee.findUnique({
          where: { code_employee: codeEmployee },
        });

        if (codeEmployeeExists) {
          return {
            statusCode: HttpStatus.CONFLICT,
            message: `Employee code ${codeEmployee} already exists`,
          };
        }

        const company = await this.prisma.company.findUnique({
          where: { id: codeCompany },
        });

        if (!company) {
          return {
            statusCode: HttpStatus.NOT_FOUND,
            message: `Company with ID ${codeCompany} not found`,
          };
        }

        return await this.prisma.employee.create({
          data: {
            code_employee: dto.codeEmployee,
            name: dto.name,
            job_description: dto.jobDescription,
            salary: dto.salary,
            enabled: true,
            company: {
              connect: { id: company.id },
            },
          },
        });
      }),
    );

    return {
      data: employees,
      statusCode: HttpStatus.CREATED,
      message: 'Employees created successfully',
    };
  }

  async findAll(
    page?: number,
    perPage?: number,
    companyId?: number,
    date?: string,
    name?: string,
  ) {
    const skip = page ? (page - 1) * perPage : 0;
    const take = perPage || 10;
    let companyIdNumber = Number(companyId);

    if (
      !Number.isNaN(companyIdNumber) &&
      companyId !== null &&
      companyIdNumber > 0
    ) {
      const company = await this.prisma.company.findUnique({
        where: { id: companyId },
      });
      if (!company) {
        return {
          statusCode: HttpStatus.NOT_FOUND,
          message: 'Company not found',
        };
      }
      companyIdNumber = company.id;
    }

    const whereClause: Prisma.employeeWhereInput = {
      enabled: true,
      ...(companyId ? { company: { id: companyIdNumber } } : {}),
      ...(name ? { name: { contains: name, mode: 'insensitive' } } : {}),
    };

    const dateSelected = date ? new Date(date) : new Date();
    const selectedMonth = dateSelected.getMonth();
    const selectedYear = dateSelected.getFullYear();

    const data = await this.prisma.employee.findMany({
      skip,
      take,
      include: {
        ticket: true,
        absence: {
          where: {
            absence_date: {
              gte: new Date(selectedYear, selectedMonth, 1),
              lt: new Date(selectedYear, selectedMonth + 1, 1),
            },
          },
          select: {
            id: true,
            absence_date: true,
            certificate_absence: true,
          },
        },
        company: true,
        snack: true,
      },
      where: whereClause,
    });

    const totalDiasNoMes = getDaysInMonth(
      new Date(selectedYear, selectedMonth),
    );
    const diasUteis = Array.from({ length: totalDiasNoMes }, (_, i) => {
      const date = new Date(selectedYear, selectedMonth, i + 1);
      return !isWeekend(date);
    }).filter(Boolean).length;

    const allData = data.map((employee) => {
      const valorDiarioVT = employee.ticket.reduce(
        (soma, t) => soma + Number(t.value),
        0,
      );

      const valorDiarioVR = employee.snack.reduce(
        (soma, t) => soma + Number(t.value),
        0,
      );

      const faltasNoMes = employee.absence.filter((absence) => {
        const dataFalta = new Date(absence.absence_date);
        return (
          dataFalta.getMonth() === selectedMonth &&
          dataFalta.getFullYear() === selectedYear
        );
      }).length;

      const valorRecargaVT = valorDiarioVT * (diasUteis - faltasNoMes);
      const valorRecargaVR = valorDiarioVR * (diasUteis - faltasNoMes);

      return {
        codeEmployee: employee.code_employee,
        codeCompany: employee.company?.id,
        name: employee.name,
        jobDescription: employee.job_description,
        salary: employee.salary.toFixed(2),
        vtTotal: valorRecargaVT.toFixed(2),
        vtPerDay: valorDiarioVT.toFixed(2),
        vrTotal: valorRecargaVR.toFixed(2),
        vrPerDay: valorDiarioVR.toFixed(2),
        enabled: employee.enabled,
        ticket: employee.ticket,
        snack: employee.snack,
        absence: employee.absence,
        company: employee.company,
      };
    });

    const countEmployee = await this.prisma.employee.count({
      where: whereClause,
    });

    return {
      data: allData,
      page: page || 1,
      perPage: perPage || 10,
      totalRecords: countEmployee,
      totalPages: Math.ceil(countEmployee / (perPage || 10)),
      statusCode: HttpStatus.OK,
      message: 'Employees retrieved successfully',
    };
  }

  async findOne(code_employee: string) {
    const data = await this.prisma.employee.findUnique({
      where: { code_employee },
    });
    if (!data) {
      return {
        statusCode: HttpStatus.NOT_FOUND,
        message: 'Employee not found',
      };
    }
    return {
      data,
      statusCode: HttpStatus.OK,
      message: 'Employee retrieved successfully',
    };
  }

  async update(code_employee: string, updateEmployeeDto: UpdateEmployeeDto) {
    const { codeCompany, snackValue } = updateEmployeeDto;

    const company = await this.prisma.company.findUnique({
      where: { id: Number(codeCompany) },
    });

    if (!company) {
      return {
        statusCode: HttpStatus.NOT_FOUND,
        message: 'Company not found',
      };
    }

    const employee = await this.prisma.employee.findUnique({
      where: { code_employee },
    });

    if (!employee) {
      return {
        statusCode: HttpStatus.NOT_FOUND,
        message: 'Employee not found',
      };
    }

    const snack = await this.prisma.snack.findMany({
      where: { code_employee },
    });

    if (snack.length === 0) {
      await this.prisma.snack.create({
        data: {
          value: snackValue,
          employee: {
            connect: { code_employee: employee.code_employee },
          },
        },
      });
    } else {
      await this.prisma.snack.update({
        where: {
          id: snack[0].id,
        },
        data: {
          value: snackValue,
          employee: {
            connect: { code_employee: employee.code_employee },
          },
        },
      });
    }

    const data = await this.prisma.employee.update({
      where: { code_employee },
      data: {
        company: {
          connect: { id: company.id },
        },
        name: updateEmployeeDto.name,
        job_description: updateEmployeeDto.jobDescription,
        salary: updateEmployeeDto.salary,
        last_modified: new Date(),
      },
    });
    return {
      data,
      statusCode: HttpStatus.OK,
      message: 'Employee updated successfully',
    };
  }

  async remove(code_employee: string) {
    const employee = await this.prisma.employee.findUnique({
      where: { code_employee },
    });

    if (!employee) {
      return {
        statusCode: HttpStatus.NOT_FOUND,
        message: 'Employee not found',
      };
    }

    const data = await this.prisma.employee.update({
      data: { enabled: false, last_modified: new Date() },
      where: { code_employee },
    });

    return {
      data,
      statusCode: HttpStatus.OK,
      message: 'Employee removed successfully',
    };
  }
}
