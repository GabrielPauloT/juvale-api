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
            id: number;
            created_at: Date;
            last_modified: Date | null;
            code_employee: string;
            absence_date: Date;
            certificate_absence: boolean;
        };
        statusCode: HttpStatus;
        message: string;
    }>;
    findAll(page?: number, perPage?: number): Promise<{
        data: {
            id: number;
            created_at: Date;
            last_modified: Date | null;
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
            id: number;
            created_at: Date;
            last_modified: Date | null;
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
                enabled: boolean;
                code_employee: string;
                code_company: number;
                job_description: string;
                salary: import("prisma/generated/prisma/runtime/library").Decimal;
            };
        } & {
            id: number;
            created_at: Date;
            last_modified: Date | null;
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
            id: number;
            created_at: Date;
            last_modified: Date | null;
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
            id: number;
            created_at: Date;
            last_modified: Date | null;
            code_employee: string;
            absence_date: Date;
            certificate_absence: boolean;
        };
    }>;
}
