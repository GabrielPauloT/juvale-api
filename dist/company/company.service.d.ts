import { HttpStatus } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class CompanyService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createCompanyDto: CreateCompanyDto): Promise<{
        data: any;
        statusCode: HttpStatus;
        message: string;
    }>;
    findAll(page?: number, perPage?: number, name?: string): Promise<{
        data: any;
        page: number;
        perPage: number;
        totalRecords: any;
        totalPages: number;
        statusCode: HttpStatus;
        message: string;
    }>;
    findAllEmployeeCostByCompany(date?: string): Promise<{
        data: any;
        statusCode: HttpStatus;
        message: string;
    }>;
    findOne(id: number): Promise<{
        statusCode: HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: any;
        statusCode: HttpStatus;
        message: string;
    }>;
    update(id: number, updateCompanyDto: UpdateCompanyDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: any;
        statusCode: HttpStatus;
        message: string;
    }>;
}
