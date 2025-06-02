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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcrypt");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createUserDto) {
        const { email, password } = createUserDto;
        const existing = await this.prisma.client.user.findUnique({
            where: { email },
        });
        if (existing) {
            return {
                statusCode: common_1.HttpStatus.CONFLICT,
                message: 'Email already in use',
            };
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const data = await this.prisma.client.user.create({
            data: {
                email,
                role: createUserDto.role,
                name: createUserDto.name,
                password: hashedPassword,
            },
        });
        return {
            data: {
                id: data.id,
                email: data.email,
                role: data.role,
                name: data.name,
            },
            statusCode: common_1.HttpStatus.CREATED,
            message: 'User created successfully',
        };
    }
    async findAll(page, perPage, name) {
        const skip = page ? (page - 1) * perPage : 0;
        const take = perPage || 10;
        const whereClause = {
            ...(name ? { name: { contains: name, mode: 'insensitive' } } : {}),
        };
        const data = await this.prisma.client.user.findMany({
            skip,
            take,
            where: whereClause,
        });
        const countUsers = await this.prisma.client.user.count();
        return {
            data: data.map((user) => ({
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
                createdAt: user.created_at,
                updatedAt: user.last_modified,
            })),
            page: page || 1,
            perPage: perPage || 10,
            totalRecords: countUsers,
            totalPages: Math.ceil(countUsers / (perPage || 10)),
            statusCode: common_1.HttpStatus.OK,
            message: 'Users retrieved successfully',
        };
    }
    async findOne(id) {
        const user = await this.prisma.client.user.findUnique({
            where: { id },
        });
        if (!user) {
            return {
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'User not found',
            };
        }
        return {
            data: {
                id: user.id,
                email: user.email,
                role: user.role,
                name: user.name,
            },
            statusCode: common_1.HttpStatus.OK,
            message: 'User retrieved successfully',
        };
    }
    async update(id, updateUserDto) {
        const user = await this.prisma.client.user.findUnique({
            where: { id },
        });
        if (!user) {
            return {
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'User not found',
            };
        }
        const password = updateUserDto.password?.trim();
        const updateData = password
            ? {
                email: updateUserDto.email,
                role: updateUserDto.role,
                name: updateUserDto.name,
                password: updateUserDto.password,
            }
            : {
                email: updateUserDto.email,
                role: updateUserDto.role,
                name: updateUserDto.name,
            };
        if (password) {
            updateData.password = await bcrypt.hash(updateUserDto.password, 10);
        }
        const updatedUser = await this.prisma.client.user.update({
            where: { id },
            data: updateData,
        });
        return {
            data: {
                id: updatedUser.id,
                email: updatedUser.email,
                role: updatedUser.role,
                name: updatedUser.name,
            },
            statusCode: common_1.HttpStatus.OK,
            message: 'User updated successfully',
        };
    }
    async remove(id) {
        const user = await this.prisma.client.user.findUnique({
            where: { id },
        });
        if (!user) {
            return {
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'User not found',
            };
        }
        await this.prisma.client.user.delete({
            where: { id },
        });
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'User deleted successfully',
        };
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map