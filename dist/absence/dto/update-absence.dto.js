"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAbsenceDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_absence_dto_1 = require("./create-absence.dto");
class UpdateAbsenceDto extends (0, swagger_1.PartialType)(create_absence_dto_1.CreateAbsenceDto) {
}
exports.UpdateAbsenceDto = UpdateAbsenceDto;
//# sourceMappingURL=update-absence.dto.js.map