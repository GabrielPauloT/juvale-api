import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CompanyController],
  providers: [CompanyService, PrismaService],
  imports: [],
})
export class CompanyModule {}
