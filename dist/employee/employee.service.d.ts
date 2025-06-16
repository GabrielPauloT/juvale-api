import { HttpStatus } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class EmployeeService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createEmployeeDto: CreateEmployeeDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: any;
        statusCode: HttpStatus;
        message: string;
    }>;
    createBatch(createEmployeeDtos: CreateEmployeeDto[]): Promise<{
        data: any;
        statusCode: HttpStatus;
        message: string;
    }>;
    findAll(page?: number, perPage?: number, companyId?: number, date?: string, name?: string): Promise<{
        statusCode: HttpStatus;
        message: string;
        data?: undefined;
        page?: undefined;
        perPage?: undefined;
        totalRecords?: undefined;
        totalPages?: undefined;
    } | {
        data: any;
        page: number;
        perPage: number;
        totalRecords: any;
        totalPages: number;
        statusCode: HttpStatus;
        message: string;
    }>;
    findOne(code_employee: string): Promise<{
        statusCode: HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: any;
        statusCode: HttpStatus;
        message: string;
    }>;
    update(code_employee: string, updateEmployeeDto: UpdateEmployeeDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: any;
        statusCode: HttpStatus;
        message: string;
    }>;
    remove(code_employee: string): Promise<{
        statusCode: HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: any;
        statusCode: HttpStatus;
        message: string;
    }>;
}
