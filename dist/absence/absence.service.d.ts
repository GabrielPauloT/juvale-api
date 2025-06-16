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
        data: {
            created_at: Date;
            last_modified: Date | null;
            id: number;
            code_employee: string;
            absence_date: Date;
            certificate_absence: boolean;
        };
        statusCode: HttpStatus;
        message: string;
    }>;
    findAll(page?: number, perPage?: number): Promise<{
        data: {
            created_at: Date;
            last_modified: Date | null;
            id: number;
            code_employee: string;
            absence_date: Date;
            certificate_absence: boolean;
        }[];
        page: number;
        perPage: number;
        totalRecords: number;
        totalPages: number;
        statusCode: HttpStatus;
        message: string;
    }>;
    findOne(id: number): Promise<{
        statusCode: HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: {
            created_at: Date;
            last_modified: Date | null;
            id: number;
            code_employee: string;
            absence_date: Date;
            certificate_absence: boolean;
        };
        statusCode: HttpStatus;
        message: string;
    }>;
    findByCodeEmployeeAndDate(codeEmployee: string, date: string): Promise<{
        statusCode: HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: ({
            employee: {
                name: string;
                created_at: Date;
                last_modified: Date | null;
                code_employee: string;
                job_description: string;
                salary: import("generated/prisma/runtime/library").Decimal;
                enabled: boolean;
                code_company: number;
            };
        } & {
            created_at: Date;
            last_modified: Date | null;
            id: number;
            code_employee: string;
            absence_date: Date;
            certificate_absence: boolean;
        })[];
        statusCode: HttpStatus;
        message: string;
    }>;
    update(id: number, updateAbsenceDto: UpdateAbsenceDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: {
            created_at: Date;
            last_modified: Date | null;
            id: number;
            code_employee: string;
            absence_date: Date;
            certificate_absence: boolean;
        };
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
        data: {
            created_at: Date;
            last_modified: Date | null;
            id: number;
            code_employee: string;
            absence_date: Date;
            certificate_absence: boolean;
        };
    }>;
}
