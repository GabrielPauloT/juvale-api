import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateAbsenceDto } from './dto/create-absence.dto';
import { UpdateAbsenceDto } from './dto/update-absence.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AbsenceService {
  constructor(private prisma: PrismaService) {}
  async create(createAbsenceDto: CreateAbsenceDto) {
    const { codeEmployee, absenceDate, certificateAbsence } = createAbsenceDto;

    const absenceDateObj = new Date(absenceDate);

    const employeeId = await this.prisma.client.employee.findUnique({
      where: { code_employee: codeEmployee },
    });

    if (!employeeId) {
      return {
        statusCode: HttpStatus.NOT_FOUND,
        message: 'Employee not found',
      };
    }

    const data = await this.prisma.client.absence.create({
      data: {
        employee: {
          connect: { code_employee: employeeId.code_employee },
        },
        absence_date: absenceDateObj,
        certificate_absence: certificateAbsence,
      },
    });
    return {
      data,
      statusCode: HttpStatus.CREATED,
      message: 'Absence created successfully',
    };
  }

  async findAll(page?: number, perPage?: number) {
    const skip = page ? (page - 1) * perPage : 0;
    const take = perPage || 10;

    const data = await this.prisma.client.absence.findMany({
      skip,
      take,
    });

    const countAbsence = await this.prisma.client.absence.count();

    return {
      data,
      page: page || 1,
      perPage: perPage || 10,
      totalRecords: countAbsence,
      totalPages: Math.ceil(countAbsence / (perPage || 10)),
      statusCode: HttpStatus.OK,
      message: 'Absences retrieved successfully',
    };
  }

  async findOne(id: number) {
    const data = await this.prisma.client.absence.findUnique({
      where: { id },
    });

    if (!data) {
      return {
        statusCode: HttpStatus.NOT_FOUND,
        message: 'Absence not found',
      };
    }

    return {
      data,
      statusCode: HttpStatus.OK,
      message: 'Absence retrieved successfully',
    };
  }

  async update(id: number, updateAbsenceDto: UpdateAbsenceDto) {
    const {
      codeEmployee,
      absenceDate,
      certificateAbsence: cerficateAbsence,
    } = updateAbsenceDto;

    const absenceDateObj = new Date(absenceDate);

    const employeeId = await this.prisma.client.employee.findUnique({
      where: { code_employee: codeEmployee },
    });

    if (!employeeId) {
      return {
        statusCode: HttpStatus.NOT_FOUND,
        message: 'Employee not found',
      };
    }

    const absence = await this.prisma.client.absence.findUnique({
      where: { id },
    });

    if (!absence) {
      return {
        statusCode: HttpStatus.NOT_FOUND,
        message: 'Absence not found',
      };
    }

    const data = await this.prisma.client.absence.update({
      where: { id },
      data: {
        employee: {
          connect: { code_employee: employeeId.code_employee },
        },
        absence_date: absenceDateObj,
        certificate_absence: cerficateAbsence,
      },
    });

    return {
      data,
      statusCode: HttpStatus.OK,
      message: 'Absence updated successfully',
    };
  }

  async remove(id: number) {
    const absence = await this.prisma.client.absence.findUnique({
      where: { id },
    });

    if (!absence) {
      return {
        statusCode: HttpStatus.NOT_FOUND,
        message: 'Absence not found',
      };
    }

    const data = await this.prisma.client.absence.delete({
      where: { id },
    });

    return {
      statusCode: HttpStatus.OK,
      message: 'Absence deleted successfully',
      data,
    };
  }
}
