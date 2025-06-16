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
        data: any;
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    findAll(page: string, perPage: string): Promise<{
        data: any;
        page: number;
        perPage: number;
        totalRecords: any;
        totalPages: number;
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    findOne(id: string): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: any;
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    findByCodeEmployeeAndDate(codeEmployee: string, date: string): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: any;
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    update(id: string, updateAbsenceDto: UpdateAbsenceDto): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: any;
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
        data: any;
    }>;
}
