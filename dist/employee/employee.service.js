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
const date_fns_1 = require("date-fns");
const prisma_service_1 = require("../prisma/prisma.service");
let EmployeeService = class EmployeeService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createEmployeeDto) {
        const { codeCompany, codeEmployee } = createEmployeeDto;
        const codeEmployeeExists = await this.prisma.employee.findUnique({
            where: { code_employee: codeEmployee },
        });
        if (codeEmployeeExists) {
            return {
                statusCode: common_1.HttpStatus.CONFLICT,
                message: 'Employee code already exists',
            };
        }
        const company = await this.prisma.company.findUnique({
            where: { id: codeCompany },
        });
        if (!company) {
            return {
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'Company not found',
            };
        }
        const data = await this.prisma.employee.create({
            data: {
                code_employee: createEmployeeDto.codeEmployee,
                name: createEmployeeDto.name,
                job_description: createEmployeeDto.jobDescription,
                salary: createEmployeeDto.salary,
                enabled: true,
                company: {
                    connect: { id: company.id },
                },
            },
        });
        return {
            data,
            statusCode: common_1.HttpStatus.CREATED,
            message: 'Employee created successfully',
        };
    }
    async createBatch(createEmployeeDtos) {
        const employees = await Promise.all(createEmployeeDtos.map(async (dto) => {
            const { codeCompany, codeEmployee } = dto;
            const codeEmployeeExists = await this.prisma.employee.findUnique({
                where: { code_employee: codeEmployee },
            });
            if (codeEmployeeExists) {
                return {
                    statusCode: common_1.HttpStatus.CONFLICT,
                    message: `Employee code ${codeEmployee} already exists`,
                };
            }
            const company = await this.prisma.company.findUnique({
                where: { id: codeCompany },
            });
            if (!company) {
                return {
                    statusCode: common_1.HttpStatus.NOT_FOUND,
                    message: `Company with ID ${codeCompany} not found`,
                };
            }
            return this.prisma.employee.create({
                data: {
                    code_employee: dto.codeEmployee,
                    name: dto.name,
                    job_description: dto.jobDescription,
                    salary: dto.salary,
                    enabled: true,
                    company: {
                        connect: { id: company.id },
                    },
                },
            });
        }));
        return {
            data: employees,
            statusCode: common_1.HttpStatus.CREATED,
            message: 'Employees created successfully',
        };
    }
    async findAll(page, perPage, companyId, date, name) {
        const skip = page ? (page - 1) * perPage : 0;
        const take = perPage || 10;
        let companyIdNumber = Number(companyId);
        if (!Number.isNaN(companyIdNumber) &&
            companyId !== null &&
            companyIdNumber > 0) {
            const company = await this.prisma.company.findUnique({
                where: { id: companyId },
            });
            if (!company) {
                return {
                    statusCode: common_1.HttpStatus.NOT_FOUND,
                    message: 'Company not found',
                };
            }
            companyIdNumber = company.id;
        }
        const whereClause = {
            enabled: true,
            ...(companyId ? { company: { id: companyIdNumber } } : {}),
            ...(name ? { name: { contains: name, mode: 'insensitive' } } : {}),
        };
        const dateSelected = date ? new Date(date) : new Date();
        const selectedMonth = dateSelected.getMonth();
        const selectedYear = dateSelected.getFullYear();
        const data = await this.prisma.employee.findMany({
            skip,
            take,
            include: {
                ticket: true,
                absence: {
                    where: {
                        absence_date: {
                            gte: new Date(selectedYear, selectedMonth, 1),
                            lt: new Date(selectedYear, selectedMonth + 1, 1),
                        },
                    },
                    select: {
                        id: true,
                        absence_date: true,
                        certificate_absence: true,
                    },
                },
                company: true,
                snack: true,
            },
            where: whereClause,
        });
        const totalDiasNoMes = (0, date_fns_1.getDaysInMonth)(new Date(selectedYear, selectedMonth));
        const diasUteis = Array.from({ length: totalDiasNoMes }, (_, i) => {
            const date = new Date(selectedYear, selectedMonth, i + 1);
            return !(0, date_fns_1.isWeekend)(date);
        }).filter(Boolean).length;
        const allData = data.map((employee) => {
            const valorDiarioVT = employee.ticket.reduce((soma, t) => soma + Number(t.value), 0);
            const valorDiarioVR = employee.snack.reduce((soma, t) => soma + Number(t.value), 0);
            const faltasNoMes = employee.absence.filter((absence) => {
                const dataFalta = new Date(absence.absence_date);
                return (dataFalta.getMonth() === selectedMonth &&
                    dataFalta.getFullYear() === selectedYear);
            }).length;
            const valorRecargaVT = valorDiarioVT * (diasUteis - faltasNoMes);
            const valorRecargaVR = valorDiarioVR * (diasUteis - faltasNoMes);
            return {
                codeEmployee: employee.code_employee,
                codeCompany: employee.company?.id,
                name: employee.name,
                jobDescription: employee.job_description,
                salary: employee.salary,
                vr: valorRecargaVT,
                va: valorRecargaVR,
                enabled: employee.enabled,
                ticket: employee.ticket,
                snack: employee.snack,
                absence: employee.absence,
                company: employee.company,
            };
        });
        const countEmployee = await this.prisma.employee.count({
            where: whereClause,
        });
        return {
            data: allData,
            page: page || 1,
            perPage: perPage || 10,
            totalRecords: countEmployee,
            totalPages: Math.ceil(countEmployee / (perPage || 10)),
            statusCode: common_1.HttpStatus.OK,
            message: 'Employees retrieved successfully',
        };
    }
    async findOne(code_employee) {
        const data = await this.prisma.employee.findUnique({
            where: { code_employee },
        });
        if (!data) {
            return {
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'Employee not found',
            };
        }
        return {
            data,
            statusCode: common_1.HttpStatus.OK,
            message: 'Employee retrieved successfully',
        };
    }
    async update(code_employee, updateEmployeeDto) {
        const { codeCompany } = updateEmployeeDto;
        const company = await this.prisma.company.findUnique({
            where: { id: codeCompany },
        });
        if (!company) {
            return {
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'Company not found',
            };
        }
        const employee = await this.prisma.employee.findUnique({
            where: { code_employee },
        });
        if (!employee) {
            return {
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'Employee not found',
            };
        }
        const data = await this.prisma.employee.update({
            where: { code_employee },
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
        return {
            data,
            statusCode: common_1.HttpStatus.OK,
            message: 'Employee updated successfully',
        };
    }
    async remove(code_employee) {
        const employee = await this.prisma.employee.findUnique({
            where: { code_employee },
        });
        if (!employee) {
            return {
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'Employee not found',
            };
        }
        const data = await this.prisma.employee.update({
            data: { enabled: false, last_modified: new Date() },
            where: { code_employee },
        });
        return {
            data,
            statusCode: common_1.HttpStatus.OK,
            message: 'Employee removed successfully',
        };
    }
};
exports.EmployeeService = EmployeeService;
exports.EmployeeService = EmployeeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EmployeeService);
//# sourceMappingURL=employee.service.js.map