import { SnackService } from './snack.service';
import { CreateSnackDto } from './dto/create-snack.dto';
import { UpdateSnackDto } from './dto/update-snack.dto';
export declare class SnackController {
    private readonly snackService;
    constructor(snackService: SnackService);
    create(createSnackDto: CreateSnackDto): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: {
            id: number;
            code_employee: string;
            value: import("generated/prisma/runtime/library").Decimal;
            created_at: Date;
            last_modified: Date | null;
        };
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    findAll(): Promise<{
        data: ({
            employee: {
                name: string;
                job_description: string;
            };
        } & {
            id: number;
            code_employee: string;
            value: import("generated/prisma/runtime/library").Decimal;
            created_at: Date;
            last_modified: Date | null;
        })[];
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
            employee: {
                name: string;
                job_description: string;
            };
        } & {
            id: number;
            code_employee: string;
            value: import("generated/prisma/runtime/library").Decimal;
            created_at: Date;
            last_modified: Date | null;
        };
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    update(id: string, updateSnackDto: UpdateSnackDto): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: {
            id: number;
            code_employee: string;
            value: import("generated/prisma/runtime/library").Decimal;
            created_at: Date;
            last_modified: Date | null;
        };
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    remove(id: string): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: {
            id: number;
            code_employee: string;
            value: import("generated/prisma/runtime/library").Decimal;
            created_at: Date;
            last_modified: Date | null;
        };
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
}
