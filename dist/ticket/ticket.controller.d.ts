import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
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
            created_at: Date;
            last_modified: Date | null;
            code_employee: string;
            value: import("generated/prisma/runtime/library").Decimal;
        };
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
            created_at: Date;
            last_modified: Date | null;
            code_employee: string;
            value: import("generated/prisma/runtime/library").Decimal;
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
            created_at: Date;
            last_modified: Date | null;
            code_employee: string;
            value: import("generated/prisma/runtime/library").Decimal;
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
            created_at: Date;
            last_modified: Date | null;
            code_employee: string;
            value: import("generated/prisma/runtime/library").Decimal;
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
            created_at: Date;
            last_modified: Date | null;
            code_employee: string;
            value: import("generated/prisma/runtime/library").Decimal;
        };
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
}
