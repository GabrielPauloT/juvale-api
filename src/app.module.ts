import { Module } from '@nestjs/common';
import { CompanyModule } from './company/company.module';
import { PrismaModule } from './prisma/prisma.module';
import { EmployeeModule } from './employee/employee.module';
import { AbsenceModule } from './absence/absence.module';
import { TicketModule } from './ticket/ticket.module';
import { SnackModule } from './snack/snack.module';
import { PdfModule } from './pdf/pdf.module';

@Module({
  imports: [
    PrismaModule,
    CompanyModule,
    EmployeeModule,
    AbsenceModule,
    TicketModule,
    SnackModule,
    PdfModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
