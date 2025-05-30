import { Module } from '@nestjs/common';
import { SnackService } from './snack.service';
import { SnackController } from './snack.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [SnackController],
  providers: [SnackService, PrismaService],
})
export class SnackModule {}
