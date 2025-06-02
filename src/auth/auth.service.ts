import { HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { authDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.prisma.client.user.findUnique({
      where: { email: username },
    });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return user;
  }

  async login(authDto: authDto) {
    const { email, password } = authDto;
    const user = await this.validateUser(email, password);

    const payload = {
      sub: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    };
    const token = await this.jwtService.signAsync(payload, {
      secret: process.env.JWT_SECRET || 'default_secret',
      expiresIn: '1d',
    });

    return {
      accessToken: token,
      statusCode: HttpStatus.OK,
      message: 'Login successful',
    };
  }
}
