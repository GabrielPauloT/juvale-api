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
const date_fns_1 = require("date-fns");
const PDFDocument = require("pdfkit");
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
    async extractFuncionariosForInactive(pdfText) {
        const [funcionarios] = await Promise.all([
            Promise.resolve(this.extractFuncionarios(pdfText)),
        ]);
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
    async generateCompanyCostReport(date) {
        const companies = await this.prisma.company.findMany({
            select: {
                name: true,
                employee: {
                    where: { enabled: true },
                    select: {
                        salary: true,
                        ticket: { select: { value: true } },
                        snack: { select: { value: true } },
                        absence: { select: { absence_date: true } },
                    },
                },
            },
        });
        const dateSelected = date ? new Date(date) : new Date();
        const selectedMonth = dateSelected.getMonth();
        const selectedYear = dateSelected.getFullYear();
        const diasUteis = Array.from({ length: (0, date_fns_1.getDaysInMonth)(dateSelected) }, (_, i) => {
            const d = new Date(selectedYear, selectedMonth, i + 1);
            return !(0, date_fns_1.isWeekend)(d);
        }).filter(Boolean).length;
        const doc = new PDFDocument({ margin: 50 });
        const buffers = [];
        this.insertBackgroundImage(doc, 'src/assets/logo.png');
        doc.on('data', buffers.push.bind(buffers));
        doc.on('end', () => { });
        doc
            .fontSize(18)
            .text('Relatório de Gastos por Empresa', { align: 'center' })
            .moveDown(2);
        let totalGeral = 0;
        for (const company of companies) {
            let totalVR = 0;
            let totalVT = 0;
            for (const emp of company.employee) {
                const faltas = emp.absence.filter((a) => {
                    const d = new Date(a.absence_date);
                    return (d.getMonth() === selectedMonth && d.getFullYear() === selectedYear);
                }).length;
                const vr = emp.snack.reduce((s, i) => s + Number(i.value), 0);
                const vt = emp.ticket.reduce((s, i) => s + Number(i.value), 0);
                totalVR += vr * (diasUteis - faltas);
                totalVT += vt * (diasUteis - faltas);
            }
            const total = totalVR + totalVT;
            totalGeral += total;
            doc.fontSize(14).text(`Empresa: ${company.name}`).moveDown(0.5);
            doc.fontSize(12);
            doc.text(`Total Vale Refeição (VR): R$ ${totalVR.toFixed(2).replace('.', ',')}`);
            doc.text(`Total Vale Transporte (VT): R$ ${totalVT.toFixed(2).replace('.', ',')}`);
            doc.moveDown(1);
            doc.moveDown();
        }
        doc
            .moveDown(1.5)
            .font('Helvetica-Bold')
            .fontSize(12)
            .text(`Total Geral: R$ ${totalGeral.toFixed(2).replace('.', ',')}`, {
            align: 'right',
        });
        doc.end();
        return new Promise((resolve) => {
            doc.on('end', () => {
                const pdfBuffer = Buffer.concat(buffers);
                resolve(pdfBuffer);
            });
        });
    }
    async generateEmployeeCostReport(date) {
        const employees = await this.prisma.employee.findMany({
            where: { enabled: true },
            orderBy: {
                code_company: 'asc',
            },
            include: {
                company: true,
                snack: { select: { value: true } },
                ticket: { select: { value: true } },
                absence: { select: { absence_date: true } },
            },
        });
        const dateSelected = date ? new Date(date) : new Date();
        const selectedMonth = dateSelected.getMonth();
        const selectedYear = dateSelected.getFullYear();
        const diasUteis = Array.from({ length: (0, date_fns_1.getDaysInMonth)(dateSelected) }, (_, i) => {
            const d = new Date(selectedYear, selectedMonth, i + 1);
            return !(0, date_fns_1.isWeekend)(d);
        }).filter(Boolean).length;
        const doc = new PDFDocument({ margin: 40 });
        const buffers = [];
        this.insertBackgroundImage(doc, 'src/assets/logo.png');
        doc.on('data', buffers.push.bind(buffers));
        doc
            .fontSize(18)
            .text('Relatório de Gastos por Funcionário', { align: 'center' })
            .moveDown(1.5);
        const tableHeaders = [
            'Funcionário',
            'Empresa',
            'Salário',
            'VR',
            'VT',
            'Total',
        ];
        const columnWidths = [150, 100, 70, 70, 70, 70];
        const startX = doc.page.margins.left;
        let y = doc.y;
        function drawRow(y, values, isHeader = false) {
            const rowHeight = 30;
            doc.font(isHeader ? 'Helvetica-Bold' : 'Helvetica').fontSize(10);
            values.forEach((text, i) => {
                const x = startX + columnWidths.slice(0, i).reduce((a, b) => a + b, 0);
                doc.rect(x, y, columnWidths[i], rowHeight).stroke();
                doc.text(text, x + 5, y + 5, {
                    width: columnWidths[i] - 10,
                    align: i < 2 ? 'left' : 'right',
                });
            });
            return y + rowHeight;
        }
        y = drawRow(y, tableHeaders, true);
        let totalGeral = 0;
        for (const emp of employees) {
            const faltas = emp.absence.filter((a) => {
                const d = new Date(a.absence_date);
                return (d.getMonth() === selectedMonth && d.getFullYear() === selectedYear);
            }).length;
            const vr = emp.snack.reduce((s, i) => s + Number(i.value), 0) *
                (diasUteis - faltas);
            const vt = emp.ticket.reduce((s, i) => s + Number(i.value), 0) *
                (diasUteis - faltas);
            const total = vr + vt;
            totalGeral += total;
            const rowData = [
                emp.name,
                emp.company.name,
                `R$ ${emp.salary.toFixed(2).replace('.', ',')}`,
                `R$ ${vr.toFixed(2).replace('.', ',')}`,
                `R$ ${vt.toFixed(2).replace('.', ',')}`,
                `R$ ${total.toFixed(2).replace('.', ',')}`,
            ];
            if (y + 25 > doc.page.height - doc.page.margins.bottom) {
                doc.addPage();
                this.insertBackgroundImage(doc, 'src/assets/logo.png');
                y = doc.y;
                y = drawRow(y, tableHeaders, true);
            }
            y = drawRow(y, rowData);
        }
        doc
            .moveDown(1.5)
            .font('Helvetica-Bold')
            .fontSize(12)
            .text(`Total Geral: R$ ${totalGeral.toFixed(2).replace('.', ',')}`, doc.page.margins.left, undefined, {
            align: 'right',
            width: doc.page.width -
                doc.page.margins.left -
                doc.page.margins.right -
                20,
        });
        doc.end();
        return new Promise((resolve) => {
            doc.on('end', () => {
                const pdfBuffer = Buffer.concat(buffers);
                resolve(pdfBuffer);
            });
        });
    }
    async generateEmployeeCostReportWithAbsences(date) {
        const employees = await this.prisma.employee.findMany({
            where: { enabled: true },
            orderBy: { code_company: 'asc' },
            include: {
                company: true,
                snack: { select: { value: true } },
                ticket: { select: { value: true } },
                absence: { select: { absence_date: true } },
            },
        });
        const dateSelected = date ? new Date(date) : new Date();
        const selectedMonth = dateSelected.getMonth();
        const selectedYear = dateSelected.getFullYear();
        const diasUteis = Array.from({ length: (0, date_fns_1.getDaysInMonth)(dateSelected) }, (_, i) => {
            const d = new Date(selectedYear, selectedMonth, i + 1);
            return !(0, date_fns_1.isWeekend)(d);
        }).filter(Boolean).length;
        const doc = new PDFDocument({ margin: 40 });
        const buffers = [];
        this.insertBackgroundImage(doc, 'src/assets/logo.png');
        doc.on('data', buffers.push.bind(buffers));
        doc
            .fontSize(18)
            .text('Relatório de Gastos por Funcionário (com Faltas)', {
            align: 'center',
        })
            .moveDown(1.5);
        const tableHeaders = [
            'Funcionário',
            'Empresa',
            'Salário',
            'VR',
            'VT',
            'Faltas',
            'Total',
        ];
        const columnWidths = [120, 90, 70, 70, 70, 70, 50];
        const startX = doc.page.margins.left;
        let y = doc.y;
        const drawRow = (y, values, isHeader = false) => {
            const rowHeight = 30;
            doc.font(isHeader ? 'Helvetica-Bold' : 'Helvetica').fontSize(10);
            values.forEach((text, i) => {
                const x = startX + columnWidths.slice(0, i).reduce((a, b) => a + b, 0);
                doc.rect(x, y, columnWidths[i], rowHeight).stroke();
                doc.text(text, x + 5, y + 5, {
                    width: columnWidths[i] - 10,
                    align: i < 2 ? 'left' : 'right',
                });
            });
            return y + rowHeight;
        };
        y = drawRow(y, tableHeaders, true);
        let totalGeral = 0;
        for (const emp of employees) {
            const faltas = emp.absence.filter((a) => {
                const d = new Date(a.absence_date);
                return (d.getMonth() === selectedMonth && d.getFullYear() === selectedYear);
            }).length;
            const vr = emp.snack.reduce((s, i) => s + Number(i.value), 0) *
                (diasUteis - faltas);
            const vt = emp.ticket.reduce((s, i) => s + Number(i.value), 0) *
                (diasUteis - faltas);
            const total = vr + vt;
            totalGeral += total;
            const rowData = [
                emp.name,
                emp.company.name,
                `R$ ${emp.salary.toFixed(2).replace('.', ',')}`,
                `R$ ${vr.toFixed(2).replace('.', ',')}`,
                `R$ ${vt.toFixed(2).replace('.', ',')}`,
                `${faltas}`,
                `R$ ${total.toFixed(2).replace('.', ',')}`,
            ];
            if (y + 25 > doc.page.height - doc.page.margins.bottom) {
                doc.addPage();
                this.insertBackgroundImage(doc, 'src/assets/logo.png');
                y = doc.y;
                y = drawRow(y, tableHeaders, true);
            }
            y = drawRow(y, rowData);
        }
        doc
            .moveDown(1.5)
            .font('Helvetica-Bold')
            .fontSize(12)
            .text(`Total Geral: R$ ${totalGeral.toFixed(2).replace('.', ',')}`, doc.page.margins.left, undefined, {
            align: 'right',
            width: doc.page.width -
                doc.page.margins.left -
                doc.page.margins.right -
                20,
        });
        doc.end();
        return new Promise((resolve) => {
            doc.on('end', () => {
                const pdfBuffer = Buffer.concat(buffers);
                resolve(pdfBuffer);
            });
        });
    }
    insertBackgroundImage(doc, imagePath) {
        const pageWidth = doc.page.width;
        const pageHeight = doc.page.height;
        const imageSize = 250;
        const x = (pageWidth - imageSize) / 2;
        const y = (pageHeight - imageSize) / 2;
        doc.save();
        doc.opacity(0.08);
        doc.image(imagePath, x, y, { width: imageSize, height: imageSize });
        doc.opacity(1);
        doc.restore();
    }
};
exports.PdfService = PdfService;
exports.PdfService = PdfService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PdfService);
//# sourceMappingURL=pdf.service.js.map