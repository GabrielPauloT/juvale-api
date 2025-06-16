import { HttpStatus } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: {
            id: any;
            email: any;
            role: any;
            name: any;
        };
        statusCode: HttpStatus;
        message: string;
    }>;
    findAll(page: any, perPage: any, name: any): Promise<{
        data: any;
        page: any;
        perPage: any;
        totalRecords: any;
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
            id: any;
            email: any;
            role: any;
            name: any;
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
            id: any;
            email: any;
            role: any;
            name: any;
        };
        statusCode: HttpStatus;
        message: string;
    }>;
    remove(id: number): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
}
