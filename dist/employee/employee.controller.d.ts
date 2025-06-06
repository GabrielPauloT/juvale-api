import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
export declare class EmployeeController {
    private readonly employeeService;
    constructor(employeeService: EmployeeService);
    create(createEmployeeDto: CreateEmployeeDto): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: {
            name: string;
            created_at: Date;
            last_modified: Date | null;
            code_employee: string;
            job_description: string;
            salary: import("generated/prisma/runtime/library").Decimal;
            enabled: boolean;
            code_company: number;
        };
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    createBatch(createEmployeeDtos: CreateEmployeeDto[]): Promise<{
        data: ({
            name: string;
            created_at: Date;
            last_modified: Date | null;
            code_employee: string;
            job_description: string;
            salary: import("generated/prisma/runtime/library").Decimal;
            enabled: boolean;
            code_company: number;
        } | {
            statusCode: import("@nestjs/common").HttpStatus;
            message: string;
        })[];
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    findAll(page: string, perPage: string, companyId: string, date: string, name?: string): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
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
            vtTotal: string;
            vtPerDay: string;
            vrTotal: string;
            vrPerDay: string;
            enabled: boolean;
            ticket: {
                created_at: Date;
                last_modified: Date | null;
                id: number;
                code_employee: string;
                value: import("generated/prisma/runtime/library").Decimal;
            }[];
            snack: {
                created_at: Date;
                last_modified: Date | null;
                id: number;
                code_employee: string;
                value: import("generated/prisma/runtime/library").Decimal;
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
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    findOne(code_employee: string): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: {
            name: string;
            created_at: Date;
            last_modified: Date | null;
            code_employee: string;
            job_description: string;
            salary: import("generated/prisma/runtime/library").Decimal;
            enabled: boolean;
            code_company: number;
        };
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    update(code_employee: string, updateEmployeeDto: UpdateEmployeeDto): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: {
            name: string;
            created_at: Date;
            last_modified: Date | null;
            code_employee: string;
            job_description: string;
            salary: import("generated/prisma/runtime/library").Decimal;
            enabled: boolean;
            code_company: number;
        };
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    remove(code_employee: string): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: {
            name: string;
            created_at: Date;
            last_modified: Date | null;
            code_employee: string;
            job_description: string;
            salary: import("generated/prisma/runtime/library").Decimal;
            enabled: boolean;
            code_company: number;
        };
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
}
