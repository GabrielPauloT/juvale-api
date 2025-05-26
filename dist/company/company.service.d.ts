import { HttpStatus } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class CompanyService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createCompanyDto: CreateCompanyDto): Promise<{
        data: {
            name: string;
            id: number;
            created_at: Date;
            last_modified: Date | null;
        };
        statusCode: HttpStatus;
        message: string;
    }>;
    findAll(page?: number, perPage?: number): Promise<{
        data: {
            name: string;
            id: number;
            created_at: Date;
            last_modified: Date | null;
        }[];
        page: number;
        perPage: number;
        totalRecords: number;
        totalPages: number;
        statusCode: HttpStatus;
        message: string;
    }>;
    findAllEmployeeCostByCompany(date?: string): Promise<{
        data: {
            nameCompany: string;
            totalVT: number;
            totalVR: number;
            totalFuncionariosAtivos: number;
        }[];
        statusCode: HttpStatus;
        message: string;
    }>;
    findOne(id: number): Promise<{
        statusCode: HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: {
            name: string;
            id: number;
            created_at: Date;
            last_modified: Date | null;
        };
        statusCode: HttpStatus;
        message: string;
    }>;
    update(id: number, updateCompanyDto: UpdateCompanyDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: {
            name: string;
            id: number;
            created_at: Date;
            last_modified: Date | null;
        };
        statusCode: HttpStatus;
        message: string;
    }>;
}
