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
            code_employee: string;
            code_company: number;
            name: string;
            job_description: string;
            salary: Prisma.Decimal;
            created_at: Date;
            last_modified: Date | null;
            enabled: boolean;
        };
        statusCode: HttpStatus;
        message: string;
    }>;
    createBatch(createEmployeeDtos: CreateEmployeeDto[]): Promise<{
        data: ({
            code_employee: string;
            code_company: number;
            name: string;
            job_description: string;
            salary: Prisma.Decimal;
            created_at: Date;
            last_modified: Date | null;
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
                code_employee: string;
                created_at: Date;
                last_modified: Date | null;
                id: number;
                value: Prisma.Decimal;
            }[];
            snack: {
                code_employee: string;
                created_at: Date;
                last_modified: Date | null;
                id: number;
                value: Prisma.Decimal;
            }[];
            absence: {
                id: number;
                absence_date: Date;
                certificate_absence: boolean;
            }[];
            company: {
                name: string;
                created_at: Date;
                last_modified: Date | null;
                id: number;
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
            code_employee: string;
            code_company: number;
            name: string;
            job_description: string;
            salary: Prisma.Decimal;
            created_at: Date;
            last_modified: Date | null;
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
            code_employee: string;
            code_company: number;
            name: string;
            job_description: string;
            salary: Prisma.Decimal;
            created_at: Date;
            last_modified: Date | null;
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
            code_employee: string;
            code_company: number;
            name: string;
            job_description: string;
            salary: Prisma.Decimal;
            created_at: Date;
            last_modified: Date | null;
            enabled: boolean;
        };
        statusCode: HttpStatus;
        message: string;
    }>;
}
