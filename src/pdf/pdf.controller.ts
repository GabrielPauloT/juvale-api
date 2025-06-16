import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Query,
  Res,
  Get,
  UseGuards,
} from '@nestjs/common';
import { PdfService } from './pdf.service';
import { FileInterceptor } from '@nestjs/platform-express';
import * as pdfParse from 'pdf-parse';
import { Response } from 'express';
import { JwtAuthGuard } from 'src/core/guards/jwt-verify.interceptors';

@Controller('pdf')
@UseGuards(JwtAuthGuard)
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  @Post('/upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadToExtractFuncionariosForCreated(
    @UploadedFile() file,
    @Query('codeCompany') codeCompany: string,
  ) {
    const data = await pdfParse(file.buffer);
    return this.pdfService.extractFuncionariosForCreated(
      data.text,
      +codeCompany,
    );
  }

  @Post('/upload/inactive')
  @UseInterceptors(FileInterceptor('file'))
  async uploadToExtractFuncionariosForInactive(@UploadedFile() file) {
    const data = await pdfParse(file.buffer);
    return this.pdfService.extractFuncionariosForInactive(data.text);
  }

  @Get('/report/company')
  async generateReportByCompany(
    @Query('date') date: string,
    @Res() res: Response,
  ) {
    const buffer = await this.pdfService.generateCompanyCostReport(date);
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="relatorio_por_empresa.pdf"',
    });
    res.end(buffer);
  }

  @Get('/report/company-period')
  async generateCompanyCostReportByPeriod(
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
    @Res() res: Response,
  ) {
    const buffer = await this.pdfService.generateCompanyCostReportByPeriod(
      startDate,
      endDate,
    );
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename=relatorio-empresa-${startDate}_to_${endDate}.pdf`,
    });
    res.end(buffer);
  }

  @Get('/report/employees')
  async generateReportByEmployee(
    @Query('date') date: string,
    @Res() res: Response,
  ) {
    const buffer = await this.pdfService.generateEmployeeCostReport(date);
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition':
        'attachment; filename="relatorio_por_funcionarios.pdf"',
    });
    res.end(buffer);
  }

  @Get('/report/employees/absences')
  async generateEmployeeCostReportWithAbsences(
    @Query('date') date: string,
    @Res() res: Response,
  ) {
    const buffer =
      await this.pdfService.generateEmployeeCostReportWithAbsences(date);
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition':
        'attachment; filename="relatorio_por_funcionarios.pdf"',
    });
    res.end(buffer);
  }
}
