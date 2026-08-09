"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentCompanion = void 0;
const common_1 = require("@nestjs/common");
exports.CurrentCompanion = (0, common_1.createParamDecorator)((_data, context) => {
    const request = context
        .switchToHttp()
        .getRequest();
    return request.companion;
});
//# sourceMappingURL=current-companion.decorator.js.map