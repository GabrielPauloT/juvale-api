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
exports.AbsenceService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AbsenceService = class AbsenceService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createAbsenceDto) {
        const { codeEmployee, absenceDate, cerficateAbsence } = createAbsenceDto;
        const absenceDateObj = new Date(absenceDate);
        const employeeId = await this.prisma.employee.findUnique({
            where: { code_employee: codeEmployee },
        });
        if (!employeeId) {
            throw new Error('Employee not found');
        }
        const data = this.prisma.absence.create({
            data: {
                employee: {
                    connect: { code_employee: employeeId.code_employee },
                },
                absence_date: absenceDateObj,
                certificate_absence: cerficateAbsence,
            },
        });
        return {
            data,
            statusCode: common_1.HttpStatus.CREATED,
            message: 'Absence created successfully',
        };
    }
    async findAll(page, perPage) {
        const skip = page ? (page - 1) * perPage : 0;
        const take = perPage || 10;
        const data = await this.prisma.absence.findMany({
            skip,
            take,
        });
        const countAbsence = await this.prisma.absence.count();
        return {
            data,
            page: page || 1,
            perPage: perPage || 10,
            totalRecords: countAbsence,
            totalPages: Math.ceil(countAbsence / (perPage || 10)),
            statusCode: common_1.HttpStatus.OK,
            message: 'Absences retrieved successfully',
        };
    }
    async findOne(id) {
        const data = await this.prisma.absence.findUnique({
            where: { id },
        });
        if (!data) {
            return {
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'Absence not found',
            };
        }
        return {
            data,
            statusCode: common_1.HttpStatus.OK,
            message: 'Absence retrieved successfully',
        };
    }
    async update(id, updateAbsenceDto) {
        const { codeEmployee, absenceDate, cerficateAbsence } = updateAbsenceDto;
        const absenceDateObj = new Date(absenceDate);
        const employeeId = await this.prisma.employee.findUnique({
            where: { code_employee: codeEmployee },
        });
        if (!employeeId) {
            return {
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'Employee not found',
            };
        }
        const absence = await this.prisma.absence.findUnique({
            where: { id },
        });
        if (!absence) {
            return {
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'Absence not found',
            };
        }
        const data = await this.prisma.absence.update({
            where: { id },
            data: {
                employee: {
                    connect: { code_employee: employeeId.code_employee },
                },
                absence_date: absenceDateObj,
                certificate_absence: cerficateAbsence,
            },
        });
        return {
            data,
            statusCode: common_1.HttpStatus.OK,
            message: 'Absence updated successfully',
        };
    }
    async remove(id) {
        const absence = await this.prisma.absence.findUnique({
            where: { id },
        });
        if (!absence) {
            return {
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'Absence not found',
            };
        }
        const data = await this.prisma.absence.delete({
            where: { id },
        });
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'Absence deleted successfully',
            data,
        };
    }
};
exports.AbsenceService = AbsenceService;
exports.AbsenceService = AbsenceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AbsenceService);
//# sourceMappingURL=absence.service.js.map