import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { CreateTicketManyDto } from './dto/create-ticket-many.dto';
export declare class TicketController {
    private readonly ticketService;
    constructor(ticketService: TicketService);
    create(createTicketDto: CreateTicketDto): Promise<{
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
    createMany(body: CreateTicketManyDto[]): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    findAll(page: string, perPage: string): Promise<{
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
    update(id: string, updateTicketDto: UpdateTicketDto): Promise<{
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
