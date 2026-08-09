"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestAuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const guest_auth_controller_1 = require("./guest-auth.controller");
const guest_auth_service_1 = require("./guest-auth.service");
const guest_auth_guard_1 = require("./guards/guest-auth.guard");
const companion_auth_guard_1 = require("./guards/companion-auth.guard");
let GuestAuthModule = class GuestAuthModule {
};
exports.GuestAuthModule = GuestAuthModule;
exports.GuestAuthModule = GuestAuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                secret: process.env.JWT_GUEST_SECRET,
                signOptions: {
                    expiresIn: '90d',
                },
            }),
        ],
        controllers: [guest_auth_controller_1.GuestAuthController],
        providers: [guest_auth_service_1.GuestAuthService, guest_auth_guard_1.GuestAuthGuard, companion_auth_guard_1.CompanionAuthGuard],
        exports: [guest_auth_guard_1.GuestAuthGuard, companion_auth_guard_1.CompanionAuthGuard, jwt_1.JwtModule],
    })
], GuestAuthModule);
//# sourceMappingURL=guest-auth.module.js.map