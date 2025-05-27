import { HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { authDto } from './dto/auth.dto';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    validateUser(username: string, password: string): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        role: string;
        created_at: Date;
        last_modified: Date | null;
    }>;
    login(authDto: authDto): Promise<{
        accessToken: string;
        statusCode: HttpStatus;
        message: string;
    }>;
}
