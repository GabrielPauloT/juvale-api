import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: {
            id: any;
            email: any;
            role: any;
            name: any;
        };
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    findAll(page?: number, perPage?: number, name?: string): Promise<{
        data: any;
        page: any;
        perPage: any;
        totalRecords: any;
        totalPages: number;
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    findOne(id: string): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: {
            id: any;
            email: any;
            role: any;
            name: any;
        };
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: {
            id: any;
            email: any;
            role: any;
            name: any;
        };
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    remove(id: string): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
}
