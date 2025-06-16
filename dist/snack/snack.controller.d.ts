import { SnackService } from './snack.service';
import { CreateSnackDto } from './dto/create-snack.dto';
import { UpdateSnackDto } from './dto/update-snack.dto';
export declare class SnackController {
    private readonly snackService;
    constructor(snackService: SnackService);
    create(createSnackDto: CreateSnackDto): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: any;
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    findAll(): Promise<{
        data: any;
        page: number;
        perPage: number;
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
        data: any;
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    update(id: string, updateSnackDto: UpdateSnackDto): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: any;
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    remove(id: string): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        data?: undefined;
    } | {
        data: any;
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
}
