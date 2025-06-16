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
        data: any;
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    createBatch(createEmployeeDtos: CreateEmployeeDto[]): Promise<{
        data: any;
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
        data: any;
        page: number;
        perPage: number;
        totalRecords: any;
        totalPages: number;
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    findOne(code_employee: string): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: any;
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    update(code_employee: string, updateEmployeeDto: UpdateEmployeeDto): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: any;
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    remove(code_employee: string): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: any;
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
}
