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
exports.AbsenceController = void 0;
const common_1 = require("@nestjs/common");
const absence_service_1 = require("./absence.service");
const create_absence_dto_1 = require("./dto/create-absence.dto");
const update_absence_dto_1 = require("./dto/update-absence.dto");
const jwt_verify_interceptors_1 = require("../core/guards/jwt-verify.interceptors");
let AbsenceController = class AbsenceController {
    constructor(absenceService) {
        this.absenceService = absenceService;
    }
    create(createAbsenceDto) {
        return this.absenceService.create(createAbsenceDto);
    }
    findAll(page, perPage) {
        return this.absenceService.findAll(+page, +perPage);
    }
    findOne(id) {
        return this.absenceService.findOne(+id);
    }
    findByCodeEmployeeAndDate(codeEmployee, date) {
        return this.absenceService.findByCodeEmployeeAndDate(codeEmployee, date);
    }
    update(id, updateAbsenceDto) {
        return this.absenceService.update(+id, updateAbsenceDto);
    }
    remove(id) {
        return this.absenceService.remove(+id);
    }
};
exports.AbsenceController = AbsenceController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_absence_dto_1.CreateAbsenceDto]),
    __metadata("design:returntype", void 0)
], AbsenceController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('perPage')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], AbsenceController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AbsenceController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('/code_employee/:codeEmployee/date/:date'),
    __param(0, (0, common_1.Param)('codeEmployee')),
    __param(1, (0, common_1.Param)('date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], AbsenceController.prototype, "findByCodeEmployeeAndDate", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_absence_dto_1.UpdateAbsenceDto]),
    __metadata("design:returntype", void 0)
], AbsenceController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AbsenceController.prototype, "remove", null);
exports.AbsenceController = AbsenceController = __decorate([
    (0, common_1.Controller)('absence'),
    (0, common_1.UseGuards)(jwt_verify_interceptors_1.JwtAuthGuard),
    __metadata("design:paramtypes", [absence_service_1.AbsenceService])
], AbsenceController);
//# sourceMappingURL=absence.controller.js.map