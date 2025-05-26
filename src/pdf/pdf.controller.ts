import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Query,
} from '@nestjs/common';
import { PdfService } from './pdf.service';
import { FileInterceptor } from '@nestjs/platform-express';
import * as pdfParse from 'pdf-parse';

@Controller('pdf')
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
}
