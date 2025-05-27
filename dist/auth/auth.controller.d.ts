import { AuthService } from './auth.service';
import { authDto } from './dto/auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    create(authDto: authDto): Promise<{
        accessToken: string;
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
}
