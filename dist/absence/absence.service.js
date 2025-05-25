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
            where: { id: codeEmployee },
        });
        if (!employeeId) {
            throw new Error('Employee not found');
        }
        return this.prisma.absence.create({
            data: {
                employee: {
                    connect: { id: employeeId.id },
                },
                absence_date: absenceDateObj,
                certificate_absence: cerficateAbsence,
            },
        });
    }
    findAll(page, perPage) {
        const skip = page ? (page - 1) * perPage : 0;
        const take = perPage || 10;
        return this.prisma.absence.findMany({
            skip,
            take,
        });
    }
    findOne(id) {
        return this.prisma.absence.findUnique({
            where: { id },
        });
    }
    async update(id, updateAbsenceDto) {
        const { codeEmployee, absenceDate, cerficateAbsence } = updateAbsenceDto;
        const absenceDateObj = new Date(absenceDate);
        const employeeId = await this.prisma.employee.findUnique({
            where: { id: codeEmployee },
        });
        if (!employeeId) {
            throw new Error('Employee not found');
        }
        return this.prisma.absence.update({
            where: { id },
            data: {
                employee: {
                    connect: { id: employeeId.id },
                },
                absence_date: absenceDateObj,
                certificate_absence: cerficateAbsence,
            },
        });
    }
    remove(id) {
        return this.prisma.absence.delete({
            where: { id },
        });
    }
};
exports.AbsenceService = AbsenceService;
exports.AbsenceService = AbsenceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AbsenceService);
//# sourceMappingURL=absence.service.js.map