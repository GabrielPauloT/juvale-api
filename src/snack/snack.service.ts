import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateSnackDto } from './dto/create-snack.dto';
import { UpdateSnackDto } from './dto/update-snack.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SnackService {
  constructor(private prisma: PrismaService) {}
  async create(createSnackDto: CreateSnackDto) {
    const { codeEmployee } = createSnackDto;

    const employee = await this.prisma.employee.findUnique({
      where: { code_employee: codeEmployee },
    });

    if (!employee) {
      return {
        statusCode: HttpStatus.NOT_FOUND,
        message: 'Employee not found',
      };
    }

    const data = await this.prisma.snack.create({
      data: {
        value: createSnackDto.value,
        employee: {
          connect: { code_employee: employee.code_employee },
        },
      },
    });
    return {
      data,
      statusCode: HttpStatus.CREATED,
      message: 'Snack created successfully',
    };
  }

  async findAll(page?: number, perPage?: number) {
    const skip = page ? (page - 1) * perPage : 0;
    const take = perPage || 10;
    const data = await this.prisma.snack.findMany({
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
    const countSnack = await this.prisma.snack.count();
    return {
      data,
      page: page || 1,
      perPage: perPage || 10,
      totalRecords: countSnack,
      totalPages: Math.ceil(countSnack / (perPage || 10)),
      statusCode: HttpStatus.OK,
      message: 'Tickets retrieved successfully',
    };
  }

  async findOne(id: number) {
    const data = await this.prisma.snack.findUnique({
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
        message: 'Snack not found',
      };
    }
    return {
      data,
      statusCode: HttpStatus.OK,
      message: 'Snack retrieved successfully',
    };
  }

  async update(id: number, updateSnackDto: UpdateSnackDto) {
    const { codeEmployee } = updateSnackDto;

    const employee = await this.prisma.employee.findUnique({
      where: { code_employee: codeEmployee },
    });

    if (!employee) {
      return {
        statusCode: HttpStatus.NOT_FOUND,
        message: 'Employee not found',
      };
    }

    const snack = await this.prisma.snack.findUnique({
      where: { id },
    });

    if (!snack) {
      return {
        statusCode: HttpStatus.NOT_FOUND,
        message: 'Snack not found',
      };
    }

    const data = await this.prisma.snack.update({
      where: { id },
      data: {
        value: updateSnackDto.value,
        last_modified: new Date(),
        employee: {
          connect: { code_employee: employee.code_employee },
        },
      },
    });
    return {
      data,
      statusCode: HttpStatus.OK,
      message: 'Snack updated successfully',
    };
  }

  async remove(id: number) {
    const snack = await this.prisma.snack.findUnique({
      where: { id },
    });

    if (!snack) {
      return {
        statusCode: HttpStatus.NOT_FOUND,
        message: 'Snack not found',
      };
    }

    const data = await this.prisma.snack.delete({
      where: { id },
    });

    return {
      data,
      statusCode: HttpStatus.OK,
      message: 'Snack deleted successfully',
    };
  }
}
