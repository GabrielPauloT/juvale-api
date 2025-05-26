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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PdfService = class PdfService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    extractFuncionarios(pdfText) {
        const funcionarios = [];
        const lines = pdfText.split('\n');
        const regex = /^(\d{6})([A-Z\sÇÃÕÉÊÁÍÓÚàéíóúâêôçãõ'-]+)(\d{2}\/\d{2}\/\d{4})(.+?)(\d{1,3}(?:\.\d{3})*,\d{2})$/;
        for (const line of lines) {
            const match = line.match(regex);
            if (match) {
                const [, codigo, nome, dataAdmissao, cargoRaw, salarioRaw] = match;
                let cargo = cargoRaw.replace(salarioRaw, '').trim();
                let salario = salarioRaw;
                const matchN = cargo.match(/N\s*$/);
                if (matchN) {
                    const nivel = salarioRaw.match(/^(\d)/)?.[1];
                    if (nivel) {
                        cargo += nivel;
                        salario = salarioRaw.replace(nivel, '').trim();
                    }
                }
                funcionarios.push({
                    codigo: codigo.trim(),
                    nome: nome.trim(),
                    cargo: cargo.replace(/\s+/g, ' '),
                    salario: parseFloat(salario.replace(/\./g, '').replace(',', '.')),
                    dataAdmissao: new Date(dataAdmissao.split('/').reverse().join('-')),
                });
            }
        }
        return funcionarios;
    }
    async extractFuncionariosForCreated(pdfText, codeCompany) {
        if (!codeCompany) {
            return {
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                message: 'Company code is required',
            };
        }
        const [company, funcionarios] = await Promise.all([
            this.prisma.company.findUnique({ where: { id: codeCompany } }),
            Promise.resolve(this.extractFuncionarios(pdfText)),
        ]);
        if (!company) {
            return {
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: `Company with ID ${codeCompany} not found`,
            };
        }
        if (funcionarios.length === 0) {
            return {
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'No employees found in the PDF',
            };
        }
        const codigos = funcionarios.map((f) => f.codigo);
        const existing = await this.prisma.employee.findMany({
            where: { code_employee: { in: codigos } },
        });
        const existingSet = new Set(existing.map((e) => e.code_employee));
        const toInsert = funcionarios.filter((f) => !existingSet.has(f.codigo));
        const reativar = existing.filter((e) => !e.enabled);
        await Promise.all(reativar.map((employee) => this.prisma.employee.update({
            where: { code_employee: employee.code_employee },
            data: {
                enabled: true,
                name: employee.name,
                job_description: employee.job_description,
                salary: employee.salary,
                code_company: codeCompany,
            },
        })));
        const insertResult = await this.prisma.employee.createMany({
            data: toInsert.map((f) => ({
                code_employee: f.codigo,
                name: f.nome,
                job_description: f.cargo,
                salary: f.salario,
                code_company: codeCompany,
                enabled: true,
            })),
        });
        return {
            statusCode: common_1.HttpStatus.CREATED,
            existingEmployees: existing.length,
            insertedEmployees: insertResult.count,
            reactivatedEmployees: reativar.length,
            message: `${insertResult.count} employees inserted successfully`,
        };
    }
    async extractFuncionariosForInactive(pdfText, codeCompany) {
        if (!codeCompany) {
            return {
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                message: 'Company code is required',
            };
        }
        const [company, funcionarios] = await Promise.all([
            this.prisma.company.findUnique({ where: { id: codeCompany } }),
            Promise.resolve(this.extractFuncionarios(pdfText)),
        ]);
        if (!company) {
            return {
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: `Company with ID ${codeCompany} not found`,
            };
        }
        if (funcionarios.length === 0) {
            return {
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'No employees found in the PDF',
            };
        }
        const codigos = funcionarios.map((f) => f.codigo);
        const [countUpdate] = await Promise.all([
            this.prisma.employee.updateMany({
                where: { code_employee: { in: codigos } },
                data: { enabled: false },
            }),
            Promise.all([
                this.prisma.snack.deleteMany({
                    where: { code_employee: { in: codigos } },
                }),
                this.prisma.ticket.deleteMany({
                    where: { employee: { code_employee: { in: codigos } } },
                }),
                this.prisma.absence.deleteMany({
                    where: { code_employee: { in: codigos } },
                }),
            ]),
        ]);
        return {
            statusCode: common_1.HttpStatus.OK,
            inactiveEmployees: codigos.length,
            message: `${countUpdate.count} employees marked as inactive successfully`,
        };
    }
};
exports.PdfService = PdfService;
exports.PdfService = PdfService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PdfService);
//# sourceMappingURL=pdf.service.js.map