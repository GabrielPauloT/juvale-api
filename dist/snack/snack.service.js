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
exports.SnackService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let SnackService = class SnackService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createSnackDto) {
        const { codeEmployee } = createSnackDto;
        const employee = await this.prisma.employee.findUnique({
            where: { code_employee: codeEmployee },
        });
        if (!employee) {
            return {
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'Employee not found',
            };
        }
        const data = await this.prisma.snack.create({
            data: {
                value: createSnackDto.value,
                employee: {
                    connect: { code_employee: employee.code_employee },
                },
            },
        });
        return {
            data,
            statusCode: common_1.HttpStatus.CREATED,
            message: 'Snack created successfully',
        };
    }
    async findAll(page, perPage) {
        const skip = page ? (page - 1) * perPage : 0;
        const take = perPage || 10;
        const data = await this.prisma.snack.findMany({
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
        const countSnack = await this.prisma.snack.count();
        return {
            data,
            page: page || 1,
            perPage: perPage || 10,
            totalRecords: countSnack,
            totalPages: Math.ceil(countSnack / (perPage || 10)),
            statusCode: common_1.HttpStatus.OK,
            message: 'Tickets retrieved successfully',
        };
    }
    async findOne(id) {
        const data = await this.prisma.snack.findUnique({
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
                message: 'Snack not found',
            };
        }
        return {
            data,
            statusCode: common_1.HttpStatus.OK,
            message: 'Snack retrieved successfully',
        };
    }
    async update(id, updateSnackDto) {
        const { codeEmployee } = updateSnackDto;
        const employee = await this.prisma.employee.findUnique({
            where: { code_employee: codeEmployee },
        });
        if (!employee) {
            return {
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'Employee not found',
            };
        }
        const snack = await this.prisma.snack.findUnique({
            where: { id },
        });
        if (!snack) {
            return {
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'Snack not found',
            };
        }
        const data = await this.prisma.snack.update({
            where: { id },
            data: {
                value: updateSnackDto.value,
                last_modified: new Date(),
                employee: {
                    connect: { code_employee: employee.code_employee },
                },
            },
        });
        return {
            data,
            statusCode: common_1.HttpStatus.OK,
            message: 'Snack updated successfully',
        };
    }
    async remove(id) {
        const snack = await this.prisma.snack.findUnique({
            where: { id },
        });
        if (!snack) {
            return {
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'Snack not found',
            };
        }
        const data = await this.prisma.snack.delete({
            where: { id },
        });
        return {
            data,
            statusCode: common_1.HttpStatus.OK,
            message: 'Snack deleted successfully',
        };
    }
};
exports.SnackService = SnackService;
exports.SnackService = SnackService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SnackService);
//# sourceMappingURL=snack.service.js.map