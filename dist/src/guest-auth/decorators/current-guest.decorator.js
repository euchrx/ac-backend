"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentGuest = void 0;
const common_1 = require("@nestjs/common");
exports.CurrentGuest = (0, common_1.createParamDecorator)((_data, context) => {
    const request = context.switchToHttp().getRequest();
    if (!request.guest) {
        throw new Error('Convidado autenticado não encontrado na requisição.');
    }
    return request.guest;
});
//# sourceMappingURL=current-guest.decorator.js.map