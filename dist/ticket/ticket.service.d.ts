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
        data: any;
        statusCode: HttpStatus;
        message: string;
    }>;
    createMany(tickets: CreateTicketManyDto[]): Promise<{
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
    update(id: number, updateTicketDto: UpdateTicketDto): Promise<{
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
        data: any;
        statusCode: HttpStatus;
        message: string;
    }>;
}
