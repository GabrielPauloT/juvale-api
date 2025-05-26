import { PdfService } from './pdf.service';
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
    uploadToExtractFuncionariosForInactive(file: any, codeCompany: string): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        inactiveEmployees?: undefined;
    } | {
        statusCode: import("@nestjs/common").HttpStatus;
        inactiveEmployees: number;
        message: string;
    }>;
}
