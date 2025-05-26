"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSnackDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_snack_dto_1 = require("./create-snack.dto");
class UpdateSnackDto extends (0, swagger_1.PartialType)(create_snack_dto_1.CreateSnackDto) {
}
exports.UpdateSnackDto = UpdateSnackDto;
//# sourceMappingURL=update-snack.dto.js.map