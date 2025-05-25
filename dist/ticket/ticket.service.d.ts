import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class TicketService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createTicketDto: CreateTicketDto): Promise<{
        id: number;
        created_at: Date;
        last_modified: Date | null;
        code_employee: number;
        value: import("generated/prisma/runtime/library").Decimal;
    }>;
    findAll(page?: number, perPage?: number): import("generated/prisma").Prisma.PrismaPromise<({
        employee: {
            name: string;
            job_description: string;
        };
    } & {
        id: number;
        created_at: Date;
        last_modified: Date | null;
        code_employee: number;
        value: import("generated/prisma/runtime/library").Decimal;
    })[]>;
    findOne(id: number): import("generated/prisma").Prisma.Prisma__ticketClient<{
        employee: {
            name: string;
            job_description: string;
        };
    } & {
        id: number;
        created_at: Date;
        last_modified: Date | null;
        code_employee: number;
        value: import("generated/prisma/runtime/library").Decimal;
    }, null, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    update(id: number, updateTicketDto: UpdateTicketDto): Promise<{
        id: number;
        created_at: Date;
        last_modified: Date | null;
        code_employee: number;
        value: import("generated/prisma/runtime/library").Decimal;
    }>;
    remove(id: number): import("generated/prisma").Prisma.Prisma__ticketClient<{
        id: number;
        created_at: Date;
        last_modified: Date | null;
        code_employee: number;
        value: import("generated/prisma/runtime/library").Decimal;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
}
