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
exports.GenerateJsonQrDto = exports.GenerateQrDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class GenerateQrDto {
    constructor() {
        this.format = 'png';
    }
}
exports.GenerateQrDto = GenerateQrDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://example.com',
        description: 'The text or URL to encode in the QR code',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], GenerateQrDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'png',
        description: 'The output format of the QR code',
        enum: ['png', 'svg', 'utf8'],
        default: 'png',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['png', 'svg', 'utf8']),
    __metadata("design:type", String)
], GenerateQrDto.prototype, "format", void 0);
class GenerateJsonQrDto {
    constructor() {
        this.format = 'png';
    }
}
exports.GenerateJsonQrDto = GenerateJsonQrDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            name: 'John Doe',
            email: 'john@example.com',
            id: '12345',
        },
        description: 'The JSON data to encode in the QR code',
    }),
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], GenerateJsonQrDto.prototype, "jsonData", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'png',
        description: 'The output format of the QR code',
        enum: ['png', 'svg', 'utf8'],
        default: 'png',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['png', 'svg', 'utf8']),
    __metadata("design:type", String)
], GenerateJsonQrDto.prototype, "format", void 0);
//# sourceMappingURL=generate-qr.dto.js.map