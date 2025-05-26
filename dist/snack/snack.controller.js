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
exports.SnackController = void 0;
const common_1 = require("@nestjs/common");
const snack_service_1 = require("./snack.service");
const create_snack_dto_1 = require("./dto/create-snack.dto");
const update_snack_dto_1 = require("./dto/update-snack.dto");
let SnackController = class SnackController {
    constructor(snackService) {
        this.snackService = snackService;
    }
    create(createSnackDto) {
        return this.snackService.create(createSnackDto);
    }
    findAll() {
        return this.snackService.findAll();
    }
    findOne(id) {
        return this.snackService.findOne(+id);
    }
    update(id, updateSnackDto) {
        return this.snackService.update(+id, updateSnackDto);
    }
    remove(id) {
        return this.snackService.remove(+id);
    }
};
exports.SnackController = SnackController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_snack_dto_1.CreateSnackDto]),
    __metadata("design:returntype", void 0)
], SnackController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SnackController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SnackController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_snack_dto_1.UpdateSnackDto]),
    __metadata("design:returntype", void 0)
], SnackController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SnackController.prototype, "remove", null);
exports.SnackController = SnackController = __decorate([
    (0, common_1.Controller)('snack'),
    __metadata("design:paramtypes", [snack_service_1.SnackService])
], SnackController);
//# sourceMappingURL=snack.controller.js.map