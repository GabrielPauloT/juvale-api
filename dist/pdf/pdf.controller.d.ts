import { PdfService } from './pdf.service';
import { Response } from 'express';
export declare class PdfController {
    private readonly pdfService;
    constructor(pdfService: PdfService);
    uploadToExtractFuncionariosForCreated(file: any, codeCompany: string): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        existingEmployees?: undefined;
        insertedEmployees?: undefined;
        reactivatedEmployees?: undefined;
    } | {
        statusCode: import("@nestjs/common").HttpStatus;
        existingEmployees: number;
        insertedEmployees: number;
        reactivatedEmployees: number;
        message: string;
    }>;
    uploadToExtractFuncionariosForInactive(file: any): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        inactiveEmployees?: undefined;
    } | {
        statusCode: import("@nestjs/common").HttpStatus;
        inactiveEmployees: number;
        message: string;
    }>;
    generateReportByCompany(date: string, res: Response): Promise<void>;
    generateCompanyCostReportByPeriod(startDate: string, endDate: string, res: Response): Promise<void>;
    generateReportByEmployeeByPeriod(startDate: string, endDate: string, res: Response): Promise<void>;
    generateReportByEmployee(date: string, res: Response): Promise<void>;
    generateEmployeeCostReportWithAbsences(date: string, res: Response): Promise<void>;
    generateEmployeeCostReportWithAbsencesByPeriod(startDate: string, endDate: string, res: Response): Promise<void>;
}
