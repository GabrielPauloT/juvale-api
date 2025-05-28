"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfController = void 0;
const common_1 = require("@nestjs/common");
const pdf_service_1 = require("./pdf.service");
const platform_express_1 = require("@nestjs/platform-express");
const pdfParse = require("pdf-parse");
let PdfController = class PdfController {
    constructor(pdfService) {
        this.pdfService = pdfService;
    }
    async uploadToExtractFuncionariosForCreated(file, codeCompany) {
        const data = await pdfParse(file.buffer);
        return this.pdfService.extractFuncionariosForCreated(data.text, +codeCompany);
    }
    async uploadToExtractFuncionariosForInactive(file) {
        const data = await pdfParse(file.buffer);
        return this.pdfService.extractFuncionariosForInactive(data.text);
    }
    async generateReportByCompany(date, res) {
        const buffer = await this.pdfService.generateCompanyCostReport(date);
        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename="relatorio_por_empresa.pdf"',
        });
        res.end(buffer);
    }
    async generateReportByEmployee(date, res) {
        const buffer = await this.pdfService.generateEmployeeCostReport(date);
        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename="relatorio_por_funcionarios.pdf"',
        });
        res.end(buffer);
    }
    async generateEmployeeCostReportWithAbsences(date, res) {
        const buffer = await this.pdfService.generateEmployeeCostReportWithAbsences(date);
        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename="relatorio_por_funcionarios.pdf"',
        });
        res.end(buffer);
    }
};
exports.PdfController = PdfController;
__decorate([
    (0, common_1.Post)('/upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Query)('codeCompany')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], PdfController.prototype, "uploadToExtractFuncionariosForCreated", null);
__decorate([
    (0, common_1.Post)('/upload/inactive'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PdfController.prototype, "uploadToExtractFuncionariosForInactive", null);
__decorate([
    (0, common_1.Get)('/report/company'),
    __param(0, (0, common_1.Query)('date')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PdfController.prototype, "generateReportByCompany", null);
__decorate([
    (0, common_1.Get)('/report/employees'),
    __param(0, (0, common_1.Query)('date')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PdfController.prototype, "generateReportByEmployee", null);
__decorate([
    (0, common_1.Get)('/report/employees/absences'),
    __param(0, (0, common_1.Query)('date')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PdfController.prototype, "generateEmployeeCostReportWithAbsences", null);
exports.PdfController = PdfController = __decorate([
    (0, common_1.Controller)('pdf'),
    __metadata("design:paramtypes", [pdf_service_1.PdfService])
], PdfController);
//# sourceMappingURL=pdf.controller.js.map