import { HttpStatus } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: {
            id: number;
            email: string;
            role: string;
            name: string;
        };
        statusCode: HttpStatus;
        message: string;
    }>;
    findAll(page: any, perPage: any): Promise<{
        data: {
            id: number;
            name: string;
            email: string;
            role: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
        page: any;
        perPage: any;
        totalRecords: number;
        totalPages: number;
        statusCode: HttpStatus;
        message: string;
    }>;
    findOne(id: number): Promise<{
        statusCode: HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: {
            id: number;
            email: string;
            role: string;
            name: string;
        };
        statusCode: HttpStatus;
        message: string;
    }>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: {
            id: number;
            email: string;
            role: string;
            name: string;
        };
        statusCode: HttpStatus;
        message: string;
    }>;
    remove(id: number): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
}
