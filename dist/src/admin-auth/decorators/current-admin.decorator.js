"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentAdmin = void 0;
const common_1 = require("@nestjs/common");
exports.CurrentAdmin = (0, common_1.createParamDecorator)((_data, context) => {
    const request = context.switchToHttp().getRequest();
    if (!request.admin) {
        throw new Error('Administrador autenticado não encontrado na requisição.');
    }
    return request.admin;
});
//# sourceMappingURL=current-admin.decorator.js.map