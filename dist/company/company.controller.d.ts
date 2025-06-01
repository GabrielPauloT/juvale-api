import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
export declare class CompanyController {
    private readonly companyService;
    constructor(companyService: CompanyService);
    create(createCompanyDto: CreateCompanyDto): Promise<{
        data: {
            id: number;
            name: string;
            created_at: Date;
            last_modified: Date | null;
        };
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    findAll(page: string, perPage: string): Promise<{
        data: {
            id: number;
            name: string;
            created_at: Date;
            last_modified: Date | null;
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
            id: number;
            name: string;
            created_at: Date;
            last_modified: Date | null;
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
            id: number;
            name: string;
            created_at: Date;
            last_modified: Date | null;
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
}
