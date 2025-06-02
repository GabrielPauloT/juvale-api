import { AbsenceService } from './absence.service';
import { CreateAbsenceDto } from './dto/create-absence.dto';
import { UpdateAbsenceDto } from './dto/update-absence.dto';
export declare class AbsenceController {
    private readonly absenceService;
    constructor(absenceService: AbsenceService);
    create(createAbsenceDto: CreateAbsenceDto): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
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
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    findAll(page: string, perPage: string): Promise<{
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
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    findOne(id: string): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
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
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    update(id: string, updateAbsenceDto: UpdateAbsenceDto): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
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
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    remove(id: string): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data?: undefined;
    } | {
        statusCode: import("@nestjs/common").HttpStatus;
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
