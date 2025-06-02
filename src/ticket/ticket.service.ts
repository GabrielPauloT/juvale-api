import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTicketManyDto } from './dto/create-ticket-many.dto';

@Injectable()
export class TicketService {
  constructor(private prisma: PrismaService) {}
  async create(createTicketDto: CreateTicketDto) {
    const { codeEmployee } = createTicketDto;

    const employee = await this.prisma.client.employee.findUnique({
      where: { code_employee: codeEmployee },
    });

    if (!employee) {
      return {
        statusCode: HttpStatus.NOT_FOUND,
        message: 'Employee not found',
      };
    }

    const data = await this.prisma.client.ticket.create({
      data: {
        value: createTicketDto.value,
        employee: {
          connect: { code_employee: employee.code_employee },
        },
      },
    });

    return {
      data,
      statusCode: HttpStatus.CREATED,
      message: 'Ticket created successfully',
    };
  }

  async createMany(tickets: CreateTicketManyDto[]) {
    const codeEmployees = tickets.map((t) => t.codeEmployee);

    const existingTickets = await this.prisma.client.ticket.findMany({
      where: { employee: { code_employee: { in: codeEmployees } } },
    });

    const toCreate = tickets.filter((ticket) => {
      return !existingTickets.some(
        (et) => et.code_employee === ticket.codeEmployee && et.id === ticket.id,
      );
    });

    const toUpdate = tickets.filter((ticket) => {
      return existingTickets.some(
        (et) => et.code_employee === ticket.codeEmployee && et.id === ticket.id,
      );
    });

    const toDelete = existingTickets.filter((et) => {
      return !tickets.some(
        (ticket) =>
          ticket.id === et.id && ticket.codeEmployee === et.code_employee,
      );
    });

    await this.prisma.client.$transaction([
      ...toDelete.map((t) =>
        this.prisma.client.ticket.delete({ where: { id: t.id } }),
      ),
      ...toCreate.map((ticket) =>
        this.prisma.client.ticket.create({
          data: {
            value: ticket.value,
            employee: {
              connect: { code_employee: ticket.codeEmployee },
            },
          },
        }),
      ),
      ...toUpdate.map((ticket) =>
        this.prisma.client.ticket.updateMany({
          where: { id: ticket.id },
          data: {
            value: ticket.value,
          },
        }),
      ),
    ]);

    return {
      statusCode: HttpStatus.OK,
      message: `Processado com sucesso: criados ${toCreate.length}, removidos ${toDelete.length}, atualizados ${toUpdate.length}`,
    };
  }

  async findAll(page?: number, perPage?: number) {
    const skip = page ? (page - 1) * perPage : 0;
    const take = perPage || 10;
    const data = await this.prisma.client.ticket.findMany({
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
    const countTicket = await this.prisma.client.ticket.count();
    return {
      data,
      page: page || 1,
      perPage: perPage || 10,
      totalRecords: countTicket,
      totalPages: Math.ceil(countTicket / (perPage || 10)),
      statusCode: HttpStatus.OK,
      message: 'Tickets retrieved successfully',
    };
  }

  async findOne(id: number) {
    const data = await this.prisma.client.ticket.findUnique({
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
    if (!data) {
      return {
        statusCode: HttpStatus.NOT_FOUND,
        message: 'Ticket not found',
      };
    }
    return {
      data,
      statusCode: HttpStatus.OK,
      message: 'Ticket retrieved successfully',
    };
  }

  async update(id: number, updateTicketDto: UpdateTicketDto) {
    const { codeEmployee } = updateTicketDto;

    const employee = await this.prisma.client.employee.findUnique({
      where: { code_employee: codeEmployee },
    });

    if (!employee) {
      return {
        statusCode: HttpStatus.NOT_FOUND,
        message: 'Employee not found',
      };
    }

    const ticket = await this.prisma.client.ticket.findUnique({
      where: { id },
    });

    if (!ticket) {
      return {
        statusCode: HttpStatus.NOT_FOUND,
        message: 'Ticket not found',
      };
    }

    const data = await this.prisma.client.ticket.update({
      where: { id },
      data: {
        value: updateTicketDto.value,
        last_modified: new Date(),
        employee: {
          connect: { code_employee: employee.code_employee },
        },
      },
    });

    return {
      data,
      statusCode: HttpStatus.OK,
      message: 'Ticket updated successfully',
    };
  }

  async remove(id: number) {
    const ticket = await this.prisma.client.ticket.findUnique({
      where: { id },
    });

    if (!ticket) {
      return {
        statusCode: HttpStatus.NOT_FOUND,
        message: 'Ticket not found',
      };
    }

    const data = await this.prisma.client.ticket.delete({
      where: { id },
    });

    return {
      data,
      statusCode: HttpStatus.OK,
      message: 'Ticket deleted successfully',
    };
  }
}
