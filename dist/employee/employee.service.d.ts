import { HttpStatus } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from 'generated/prisma';
export declare class EmployeeService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createEmployeeDto: CreateEmployeeDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: {
            name: string;
            created_at: Date;
            last_modified: Date | null;
            code_employee: string;
            code_company: number;
            job_description: string;
            salary: Prisma.Decimal;
            enabled: boolean;
        };
        statusCode: HttpStatus;
        message: string;
    }>;
    createBatch(createEmployeeDtos: CreateEmployeeDto[]): Promise<{
        data: ({
            name: string;
            created_at: Date;
            last_modified: Date | null;
            code_employee: string;
            code_company: number;
            job_description: string;
            salary: Prisma.Decimal;
            enabled: boolean;
        } | {
            statusCode: HttpStatus;
            message: string;
        })[];
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
        data: {
            codeEmployee: string;
            codeCompany: number;
            name: string;
            jobDescription: string;
            salary: string;
            vr: string;
            va: string;
            enabled: boolean;
            ticket: {
                id: number;
                created_at: Date;
                last_modified: Date | null;
                code_employee: string;
                value: Prisma.Decimal;
            }[];
            snack: {
                id: number;
                created_at: Date;
                last_modified: Date | null;
                code_employee: string;
                value: Prisma.Decimal;
            }[];
            absence: {
                id: number;
                absence_date: Date;
                certificate_absence: boolean;
            }[];
            company: {
                name: string;
                id: number;
                created_at: Date;
                last_modified: Date | null;
            };
        }[];
        page: number;
        perPage: number;
        totalRecords: number;
        totalPages: number;
        statusCode: HttpStatus;
        message: string;
    }>;
    findOne(code_employee: string): Promise<{
        statusCode: HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: {
            name: string;
            created_at: Date;
            last_modified: Date | null;
            code_employee: string;
            code_company: number;
            job_description: string;
            salary: Prisma.Decimal;
            enabled: boolean;
        };
        statusCode: HttpStatus;
        message: string;
    }>;
    update(code_employee: string, updateEmployeeDto: UpdateEmployeeDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: {
            name: string;
            created_at: Date;
            last_modified: Date | null;
            code_employee: string;
            code_company: number;
            job_description: string;
            salary: Prisma.Decimal;
            enabled: boolean;
        };
        statusCode: HttpStatus;
        message: string;
    }>;
    remove(code_employee: string): Promise<{
        statusCode: HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: {
            name: string;
            created_at: Date;
            last_modified: Date | null;
            code_employee: string;
            code_company: number;
            job_description: string;
            salary: Prisma.Decimal;
            enabled: boolean;
        };
        statusCode: HttpStatus;
        message: string;
    }>;
}
