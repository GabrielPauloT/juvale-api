import { Injectable } from '@nestjs/common';
import { CreateAbsenceDto } from './dto/create-absence.dto';
import { UpdateAbsenceDto } from './dto/update-absence.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AbsenceService {
  constructor(private prisma: PrismaService) {}
  async create(createAbsenceDto: CreateAbsenceDto) {
    const { codeEmployee, absenceDate, cerficateAbsence } = createAbsenceDto;

    const absenceDateObj = new Date(absenceDate);

    const employeeId = await this.prisma.employee.findUnique({
      where: { id: codeEmployee },
    });

    if (!employeeId) {
      throw new Error('Employee not found');
    }

    return this.prisma.absence.create({
      data: {
        employee: {
          connect: { id: employeeId.id },
        },
        absence_date: absenceDateObj,
        certificate_absence: cerficateAbsence,
      },
    });
  }

  findAll(page?: number, perPage?: number) {
    const skip = page ? (page - 1) * perPage : 0;
    const take = perPage || 10;

    return this.prisma.absence.findMany({
      skip,
      take,
    });
  }

  findOne(id: number) {
    return this.prisma.absence.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateAbsenceDto: UpdateAbsenceDto) {
    const { codeEmployee, absenceDate, cerficateAbsence } = updateAbsenceDto;

    const absenceDateObj = new Date(absenceDate);

    const employeeId = await this.prisma.employee.findUnique({
      where: { id: codeEmployee },
    });

    if (!employeeId) {
      throw new Error('Employee not found');
    }

    return this.prisma.absence.update({
      where: { id },
      data: {
        employee: {
          connect: { id: employeeId.id },
        },
        absence_date: absenceDateObj,
        certificate_absence: cerficateAbsence,
      },
    });
  }

  remove(id: number) {
    return this.prisma.absence.delete({
      where: { id },
    });
  }
}
