import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
export declare class CompanyController {
    private readonly companyService;
    constructor(companyService: CompanyService);
    create(createCompanyDto: CreateCompanyDto): Promise<{
        data: {
            name: string;
            id: number;
            created_at: Date;
            last_modified: Date | null;
            enabled: boolean;
        };
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    findAll(page: string, perPage: string, name: string): Promise<{
        data: {
            name: string;
            id: number;
            created_at: Date;
            last_modified: Date | null;
            enabled: boolean;
        }[];
        page: number;
        perPage: number;
        totalRecords: number;
        totalPages: number;
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    findOne(id: string): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: {
            name: string;
            id: number;
            created_at: Date;
            last_modified: Date | null;
            enabled: boolean;
        };
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    update(id: string, updateCompanyDto: UpdateCompanyDto): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: {
            name: string;
            id: number;
            created_at: Date;
            last_modified: Date | null;
            enabled: boolean;
        };
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    findAllEmployeeCostByCompany(date: string): Promise<{
        data: {
            nameCompany: string;
            totalVT: number;
            totalVR: number;
            totalFuncionariosAtivos: number;
        }[];
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    remove(id: string): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: {
            name: string;
            id: number;
            created_at: Date;
            last_modified: Date | null;
            enabled: boolean;
        };
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
}
