import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './company/company.module';
import { PrismaModule } from './prisma/prisma.module';
import { EmployeeModule } from './employee/employee.module';
import { AbsenceModule } from './absence/absence.module';
import { TicketModule } from './ticket/ticket.module';

@Module({
  imports: [PrismaModule, CompanyModule, EmployeeModule, AbsenceModule, TicketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
