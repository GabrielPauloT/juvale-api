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
            where: { id: codeEmployee },
        });
        if (!employee) {
            throw new Error('Employee not found');
        }
        return this.prisma.ticket.create({
            data: {
                value: createTicketDto.value,
                employee: {
                    connect: { id: employee.id },
                },
            },
        });
    }
    findAll(page, perPage) {
        const skip = page ? (page - 1) * perPage : 0;
        const take = perPage || 10;
        return this.prisma.ticket.findMany({
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
    }
    findOne(id) {
        return this.prisma.ticket.findUnique({
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
    }
    async update(id, updateTicketDto) {
        const { codeEmployee } = updateTicketDto;
        const employee = await this.prisma.employee.findUnique({
            where: { id: codeEmployee },
        });
        if (!employee) {
            throw new Error('Employee not found');
        }
        return this.prisma.ticket.update({
            where: { id },
            data: {
                value: updateTicketDto.value,
                employee: {
                    connect: { id: employee.id },
                },
            },
        });
    }
    remove(id) {
        return this.prisma.ticket.delete({
            where: { id },
        });
    }
};
exports.TicketService = TicketService;
exports.TicketService = TicketService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TicketService);
//# sourceMappingURL=ticket.service.js.map