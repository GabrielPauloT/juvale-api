import { HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class PdfService {
    private prisma;
    constructor(prisma: PrismaService);
    private extractFuncionarios;
    extractFuncionariosForCreated(pdfText: string, codeCompany: number): Promise<{
        statusCode: HttpStatus;
        message: string;
        existingEmployees?: undefined;
        insertedEmployees?: undefined;
        reactivatedEmployees?: undefined;
    } | {
        statusCode: HttpStatus;
        existingEmployees: number;
        insertedEmployees: number;
        reactivatedEmployees: number;
        message: string;
    }>;
    extractFuncionariosForInactive(pdfText: string): Promise<{
        statusCode: HttpStatus;
        message: string;
        inactiveEmployees?: undefined;
    } | {
        statusCode: HttpStatus;
        inactiveEmployees: number;
        message: string;
    }>;
    generateCompanyCostReport(date?: string): Promise<Buffer>;
    generateCompanyCostReportByPeriod(startDate: string, endDate: string): Promise<Buffer>;
    generateEmployeeCostReport(date?: string): Promise<Buffer>;
    generateEmployeeCostReportByPeriod(startDate: string, endDate: string): Promise<Buffer>;
    generateEmployeeCostReportWithAbsences(date?: string): Promise<Buffer>;
    generateEmployeeCostReportWithAbsencesByPeriod(startDate: string, endDate: string): Promise<Buffer>;
    private insertBackgroundImage;
}
