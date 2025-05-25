import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TicketService {
  constructor(private prisma: PrismaService) {}
  async create(createTicketDto: CreateTicketDto) {
    const { codeEmployee } = createTicketDto;

    const employee = await this.prisma.employee.findUnique({
      where: { id: codeEmployee },
    });

    if (!employee) {
      throw new Error('Employee not found');
    }

    return this.prisma.ticket.create({
      data: {
        value: createTicketDto.value,
        employee: {
          connect: { id: employee.id },
        },
      },
    });
  }

  findAll(page?: number, perPage?: number) {
    const skip = page ? (page - 1) * perPage : 0;
    const take = perPage || 10;
    return this.prisma.ticket.findMany({
      skip,
      take,
      include: {
        employee: {
          select: {
            name: true,
            job_description: true,
          },
        },
      },
    });
  }

  findOne(id: number) {
    return this.prisma.ticket.findUnique({
      where: { id },
      include: {
        employee: {
          select: {
            name: true,
            job_description: true,
          },
        },
      },
    });
  }

  async update(id: number, updateTicketDto: UpdateTicketDto) {
    const { codeEmployee } = updateTicketDto;

    const employee = await this.prisma.employee.findUnique({
      where: { id: codeEmployee },
    });

    if (!employee) {
      throw new Error('Employee not found');
    }

    return this.prisma.ticket.update({
      where: { id },
      data: {
        value: updateTicketDto.value,
        employee: {
          connect: { id: employee.id },
        },
      },
    });
  }

  remove(id: number) {
    return this.prisma.ticket.delete({
      where: { id },
    });
  }
}
