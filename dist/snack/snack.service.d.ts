import { HttpStatus } from '@nestjs/common';
import { CreateSnackDto } from './dto/create-snack.dto';
import { UpdateSnackDto } from './dto/update-snack.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class SnackService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createSnackDto: CreateSnackDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: {
            id: number;
            created_at: Date;
            last_modified: Date | null;
            code_employee: string;
            value: import("prisma/generated/prisma/runtime/library").Decimal;
        };
        statusCode: HttpStatus;
        message: string;
    }>;
    findAll(page?: number, perPage?: number): Promise<{
        data: ({
            employee: {
                name: string;
                job_description: string;
            };
        } & {
            id: number;
            created_at: Date;
            last_modified: Date | null;
            code_employee: string;
            value: import("prisma/generated/prisma/runtime/library").Decimal;
        })[];
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
            employee: {
                name: string;
                job_description: string;
            };
        } & {
            id: number;
            created_at: Date;
            last_modified: Date | null;
            code_employee: string;
            value: import("prisma/generated/prisma/runtime/library").Decimal;
        };
        statusCode: HttpStatus;
        message: string;
    }>;
    update(id: number, updateSnackDto: UpdateSnackDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: {
            id: number;
            created_at: Date;
            last_modified: Date | null;
            code_employee: string;
            value: import("prisma/generated/prisma/runtime/library").Decimal;
        };
        statusCode: HttpStatus;
        message: string;
    }>;
    remove(id: number): Promise<{
        statusCode: HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: {
            id: number;
            created_at: Date;
            last_modified: Date | null;
            code_employee: string;
            value: import("prisma/generated/prisma/runtime/library").Decimal;
        };
        statusCode: HttpStatus;
        message: string;
    }>;
}
