import { HttpStatus } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTicketManyDto } from './dto/create-ticket-many.dto';
export declare class TicketService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createTicketDto: CreateTicketDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: {
            id: number;
            created_at: Date;
            last_modified: Date | null;
            code_employee: string;
            value: import("generated/prisma/runtime/library").Decimal;
        };
        statusCode: HttpStatus;
        message: string;
    }>;
    createMany(tickets: CreateTicketManyDto[]): Promise<{
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
            value: import("generated/prisma/runtime/library").Decimal;
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
            value: import("generated/prisma/runtime/library").Decimal;
        };
        statusCode: HttpStatus;
        message: string;
    }>;
    update(id: number, updateTicketDto: UpdateTicketDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: {
            id: number;
            created_at: Date;
            last_modified: Date | null;
            code_employee: string;
            value: import("generated/prisma/runtime/library").Decimal;
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
            value: import("generated/prisma/runtime/library").Decimal;
        };
        statusCode: HttpStatus;
        message: string;
    }>;
}
