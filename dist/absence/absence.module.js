"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbsenceModule = void 0;
const common_1 = require("@nestjs/common");
const absence_service_1 = require("./absence.service");
const absence_controller_1 = require("./absence.controller");
const prisma_service_1 = require("../prisma/prisma.service");
let AbsenceModule = class AbsenceModule {
};
exports.AbsenceModule = AbsenceModule;
exports.AbsenceModule = AbsenceModule = __decorate([
    (0, common_1.Module)({
        controllers: [absence_controller_1.AbsenceController],
        providers: [absence_service_1.AbsenceService, prisma_service_1.PrismaService],
    })
], AbsenceModule);
//# sourceMappingURL=absence.module.js.map