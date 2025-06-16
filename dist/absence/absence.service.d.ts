import { HttpStatus } from '@nestjs/common';
import { CreateAbsenceDto } from './dto/create-absence.dto';
import { UpdateAbsenceDto } from './dto/update-absence.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class AbsenceService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createAbsenceDto: CreateAbsenceDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: any;
        statusCode: HttpStatus;
        message: string;
    }>;
    findAll(page?: number, perPage?: number): Promise<{
        data: any;
        page: number;
        perPage: number;
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
        data: any;
        statusCode: HttpStatus;
        message: string;
    }>;
    findByCodeEmployeeAndDate(codeEmployee: string, date: string): Promise<{
        statusCode: HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: any;
        statusCode: HttpStatus;
        message: string;
    }>;
    update(id: number, updateAbsenceDto: UpdateAbsenceDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: any;
        statusCode: HttpStatus;
        message: string;
    }>;
    remove(id: number): Promise<{
        statusCode: HttpStatus;
        message: string;
        data?: undefined;
    } | {
        statusCode: HttpStatus;
        message: string;
        data: any;
    }>;
}
