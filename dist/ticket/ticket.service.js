"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TicketService = class TicketService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createTicketDto) {
        const { codeEmployee } = createTicketDto;
        const employee = await this.prisma.employee.findUnique({
            where: { code_employee: codeEmployee },
        });
        if (!employee) {
            return {
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'Employee not found',
            };
        }
        const data = await this.prisma.ticket.create({
            data: {
                value: createTicketDto.value,
                employee: {
                    connect: { code_employee: employee.code_employee },
                },
            },
        });
        return {
            data,
            statusCode: common_1.HttpStatus.CREATED,
            message: 'Ticket created successfully',
        };
    }
    async createMany(tickets) {
        const codeEmployees = tickets.map((t) => t.codeEmployee);
        const existingTickets = await this.prisma.ticket.findMany({
            where: { employee: { code_employee: { in: codeEmployees } } },
        });
        const toCreate = tickets.filter((ticket) => {
            return !existingTickets.some((et) => et.code_employee === ticket.codeEmployee && et.id === ticket.id);
        });
        const toDelete = existingTickets.filter((et) => {
            return !tickets.some((ticket) => ticket.id === et.id && ticket.codeEmployee === et.code_employee);
        });
        await this.prisma.$transaction([
            ...toDelete.map((t) => this.prisma.ticket.delete({ where: { id: t.id } })),
            ...toCreate.map((ticket) => this.prisma.ticket.create({
                data: {
                    value: ticket.value,
                    employee: {
                        connect: { code_employee: ticket.codeEmployee },
                    },
                },
            })),
        ]);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: `Processado com sucesso: criados ${toCreate.length}, removidos ${toDelete.length}`,
        };
    }
    async findAll(page, perPage) {
        const skip = page ? (page - 1) * perPage : 0;
        const take = perPage || 10;
        const data = await this.prisma.ticket.findMany({
            skip,
            take,
            include: {
                employee: {
                    select: {
                        name: true,
                        job_description: true,
                    },
                },
            },
        });
        const countTicket = await this.prisma.ticket.count();
        return {
            data,
            page: page || 1,
            perPage: perPage || 10,
            totalRecords: countTicket,
            totalPages: Math.ceil(countTicket / (perPage || 10)),
            statusCode: common_1.HttpStatus.OK,
            message: 'Tickets retrieved successfully',
        };
    }
    async findOne(id) {
        const data = await this.prisma.ticket.findUnique({
            where: { id },
            include: {
                employee: {
                    select: {
                        name: true,
                        job_description: true,
                    },
                },
            },
        });
        if (!data) {
            return {
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'Ticket not found',
            };
        }
        return {
            data,
            statusCode: common_1.HttpStatus.OK,
            message: 'Ticket retrieved successfully',
        };
    }
    async update(id, updateTicketDto) {
        const { codeEmployee } = updateTicketDto;
        const employee = await this.prisma.employee.findUnique({
            where: { code_employee: codeEmployee },
        });
        if (!employee) {
            return {
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'Employee not found',
            };
        }
        const ticket = await this.prisma.ticket.findUnique({
            where: { id },
        });
        if (!ticket) {
            return {
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'Ticket not found',
            };
        }
        const data = await this.prisma.ticket.update({
            where: { id },
            data: {
                value: updateTicketDto.value,
                last_modified: new Date(),
                employee: {
                    connect: { code_employee: employee.code_employee },
                },
            },
        });
        return {
            data,
            statusCode: common_1.HttpStatus.OK,
            message: 'Ticket updated successfully',
        };
    }
    async remove(id) {
        const ticket = await this.prisma.ticket.findUnique({
            where: { id },
        });
        if (!ticket) {
            return {
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'Ticket not found',
            };
        }
        const data = await this.prisma.ticket.delete({
            where: { id },
        });
        return {
            data,
            statusCode: common_1.HttpStatus.OK,
            message: 'Ticket deleted successfully',
        };
    }
};
exports.TicketService = TicketService;
exports.TicketService = TicketService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TicketService);
//# sourceMappingURL=ticket.service.js.map