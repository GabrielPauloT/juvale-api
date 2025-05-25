import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EmployeeService {
  constructor(private prisma: PrismaService) {}
  async create(createEmployeeDto: CreateEmployeeDto) {
    const { codeCompany } = createEmployeeDto;

    const company = await this.prisma.company.findUnique({
      where: { id: codeCompany },
    });

    if (!company) {
      throw new Error('Company not found');
    }

    return this.prisma.employee.create({
      data: {
        name: createEmployeeDto.name,
        job_description: createEmployeeDto.jobDescription,
        salary: createEmployeeDto.salary,
        enabled: true,
        company: {
          connect: { id: company.id },
        },
      },
    });
  }

  findAll(page?: number, perPage?: number) {
    const skip = page ? (page - 1) * perPage : 0;
    const take = perPage || 10;
    return this.prisma.employee.findMany({
      skip,
      take,
      where: { enabled: true },
    });
  }

  findOne(id: number) {
    return this.prisma.employee.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    const { codeCompany } = updateEmployeeDto;

    const company = await this.prisma.company.findUnique({
      where: { id: codeCompany },
    });

    if (!company) {
      throw new Error('Company not found');
    }

    return this.prisma.employee.update({
      where: { id },
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
  }

  remove(id: number) {
    return this.prisma.employee.update({
      data: { enabled: false, last_modified: new Date() },
      where: { id },
    });
  }
}
