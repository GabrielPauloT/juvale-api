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
exports.CompanyService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const date_fns_1 = require("date-fns");
let CompanyService = class CompanyService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createCompanyDto) {
        const data = await this.prisma.client.company.create({
            data: createCompanyDto,
        });
        return {
            data,
            statusCode: common_1.HttpStatus.CREATED,
            message: 'Company created successfully',
        };
    }
    async findAll(page, perPage) {
        const skip = page ? (page - 1) * perPage : 0;
        const take = perPage || 10;
        const data = await this.prisma.client.company.findMany({
            skip,
            take,
            cacheStrategy: { ttl: 60 },
        });
        const countCompany = await this.prisma.client.company.count({
            cacheStrategy: { ttl: 60 },
        });
        return {
            data,
            page: page || 1,
            perPage: perPage || 10,
            totalRecords: countCompany,
            totalPages: Math.ceil(countCompany / (perPage || 10)),
            statusCode: common_1.HttpStatus.OK,
            message: 'Companies retrieved successfully',
        };
    }
    async findAllEmployeeCostByCompany(date) {
        const companies = await this.prisma.client.company.findMany({
            select: {
                id: true,
                name: true,
                employee: {
                    where: { enabled: true },
                    select: {
                        code_employee: true,
                        name: true,
                        salary: true,
                        snack: {
                            select: { value: true },
                        },
                        ticket: {
                            select: { value: true },
                        },
                        absence: {
                            select: {
                                absence_date: true,
                            },
                        },
                    },
                },
            },
        });
        const dateSelected = date ? new Date(date) : new Date();
        const selectedMonth = dateSelected.getMonth();
        const selectedYear = dateSelected.getFullYear();
        const totalDiasNoMes = (0, date_fns_1.getDaysInMonth)(dateSelected);
        const diasUteis = Array.from({ length: totalDiasNoMes }, (_, i) => {
            const date = new Date(selectedYear, selectedMonth, i + 1);
            return !(0, date_fns_1.isWeekend)(date);
        }).filter(Boolean).length;
        const result = companies.map((company) => {
            let totalVT = 0;
            let totalVR = 0;
            const totalFuncionariosAtivos = company.employee.length;
            company.employee.forEach((employee) => {
                const valorDiarioVT = employee.ticket.reduce((sum, ticket) => sum + Number(ticket.value), 0);
                const valorDiarioVR = employee.snack.reduce((sum, snack) => sum + Number(snack.value), 0);
                const faltasNoMes = employee.absence.filter((absence) => {
                    const dataFalta = new Date(absence.absence_date);
                    return (dataFalta.getMonth() === selectedMonth &&
                        dataFalta.getFullYear() === selectedYear);
                }).length;
                const valorVT = valorDiarioVT * diasUteis - valorDiarioVT * faltasNoMes;
                totalVT += valorVT;
                const valorVR = valorDiarioVR * diasUteis - valorDiarioVR * faltasNoMes;
                totalVR += valorVR;
            });
            return {
                nameCompany: company.name,
                totalVT,
                totalVR,
                totalFuncionariosAtivos,
            };
        });
        return {
            data: result,
            statusCode: common_1.HttpStatus.OK,
            message: 'Employee costs by company retrieved successfully',
        };
    }
    async findOne(id) {
        const data = await this.prisma.client.company.findUnique({
            where: { id },
            cacheStrategy: { ttl: 60 },
        });
        if (!data) {
            return {
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'Company not found',
            };
        }
        return {
            data,
            statusCode: common_1.HttpStatus.OK,
            message: 'Company retrieved successfully',
        };
    }
    async update(id, updateCompanyDto) {
        const existingCompany = await this.prisma.client.company.findUnique({
            where: { id },
        });
        if (!existingCompany) {
            return {
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'Company not found',
            };
        }
        const data = await this.prisma.client.company.update({
            where: { id },
            data: {
                ...updateCompanyDto,
                last_modified: new Date(),
            },
        });
        return {
            data,
            statusCode: common_1.HttpStatus.OK,
            message: 'Company updated successfully',
        };
    }
};
exports.CompanyService = CompanyService;
exports.CompanyService = CompanyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CompanyService);
//# sourceMappingURL=company.service.js.map