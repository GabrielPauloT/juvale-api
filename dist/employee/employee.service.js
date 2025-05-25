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
exports.EmployeeService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let EmployeeService = class EmployeeService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createEmployeeDto) {
        const { codeCompany } = createEmployeeDto;
        const company = await this.prisma.company.findUnique({
            where: { id: codeCompany },
        });
        if (!company) {
            throw new Error('Company not found');
        }
        return this.prisma.employee.create({
            data: {
                name: createEmployeeDto.name,
                job_description: createEmployeeDto.jobDescription,
                salary: createEmployeeDto.salary,
                enabled: true,
                company: {
                    connect: { id: company.id },
                },
            },
        });
    }
    findAll(page, perPage) {
        const skip = page ? (page - 1) * perPage : 0;
        const take = perPage || 10;
        return this.prisma.employee.findMany({
            skip,
            take,
            where: { enabled: true },
        });
    }
    findOne(id) {
        return this.prisma.employee.findUnique({
            where: { id },
        });
    }
    async update(id, updateEmployeeDto) {
        const { codeCompany } = updateEmployeeDto;
        const company = await this.prisma.company.findUnique({
            where: { id: codeCompany },
        });
        if (!company) {
            throw new Error('Company not found');
        }
        return this.prisma.employee.update({
            where: { id },
            data: {
                company: {
                    connect: { id: company.id },
                },
                name: updateEmployeeDto.name,
                job_description: updateEmployeeDto.jobDescription,
                salary: updateEmployeeDto.salary,
                last_modified: new Date(),
            },
        });
    }
    remove(id) {
        return this.prisma.employee.update({
            data: { enabled: false, last_modified: new Date() },
            where: { id },
        });
    }
};
exports.EmployeeService = EmployeeService;
exports.EmployeeService = EmployeeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EmployeeService);
//# sourceMappingURL=employee.service.js.map