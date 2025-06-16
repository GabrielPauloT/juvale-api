import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { Prisma } from 'prisma/generated/prisma';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    const { email, password } = createUserDto;

    const existing = await this.prisma.user.findUnique({
      where: { email },
    });
    if (existing) {
      return {
        statusCode: HttpStatus.CONFLICT,
        message: 'Email already in use',
      };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const data = await this.prisma.user.create({
      data: {
        email,
        role: createUserDto.role,
        name: createUserDto.name,
        password: hashedPassword,
      },
    });

    return {
      data: {
        id: data.id,
        email: data.email,
        role: data.role,
        name: data.name,
      },
      statusCode: HttpStatus.CREATED,
      message: 'User created successfully',
    };
  }

  async findAll(page, perPage, name) {
    const skip = page ? (page - 1) * perPage : 0;
    const take = perPage || 10;

    const whereClause: Prisma.userWhereInput = {
      ...(name ? { name: { contains: name, mode: 'insensitive' } } : {}),
    };

    const data = await this.prisma.user.findMany({
      skip,
      take,
      where: whereClause,
    });

    const countUsers = await this.prisma.user.count({
      where: whereClause,
    });

    return {
      data: data.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        createdAt: user.created_at,
        updatedAt: user.last_modified,
      })),
      page: page || 1,
      perPage: perPage || 10,
      totalRecords: countUsers,
      totalPages: Math.ceil(countUsers / (perPage || 10)),
      statusCode: HttpStatus.OK,
      message: 'Users retrieved successfully',
    };
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      return {
        statusCode: HttpStatus.NOT_FOUND,
        message: 'User not found',
      };
    }

    return {
      data: {
        id: user.id,
        email: user.email,
        role: user.role,
        name: user.name,
      },
      statusCode: HttpStatus.OK,
      message: 'User retrieved successfully',
    };
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      return {
        statusCode: HttpStatus.NOT_FOUND,
        message: 'User not found',
      };
    }

    const password = updateUserDto.password?.trim();

    const updateData = password
      ? {
          email: updateUserDto.email,
          role: updateUserDto.role,
          name: updateUserDto.name,
          password: updateUserDto.password,
        }
      : {
          email: updateUserDto.email,
          role: updateUserDto.role,
          name: updateUserDto.name,
        };

    if (password) {
      updateData.password = await bcrypt.hash(updateUserDto.password, 10);
    }

    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: updateData,
    });

    return {
      data: {
        id: updatedUser.id,
        email: updatedUser.email,
        role: updatedUser.role,
        name: updatedUser.name,
      },
      statusCode: HttpStatus.OK,
      message: 'User updated successfully',
    };
  }

  async remove(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      return {
        statusCode: HttpStatus.NOT_FOUND,
        message: 'User not found',
      };
    }

    await this.prisma.user.delete({
      where: { id },
    });

    return {
      statusCode: HttpStatus.OK,
      message: 'User deleted successfully',
    };
  }
}
