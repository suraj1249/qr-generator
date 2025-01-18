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
exports.QrController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const QRCode = require("qrcode");
const generate_qr_dto_1 = require("./dto/generate-qr.dto");
let QrController = class QrController {
    async generateQR(generateQrDto, res) {
        try {
            let qrCode;
            console.log('aslkdjalsdjld', qrCode);
            switch (generateQrDto.format) {
                case 'svg':
                    qrCode = await QRCode.toString(generateQrDto.data, { type: 'svg' });
                    res.header('Content-Type', 'image/svg+xml');
                    return res.send(qrCode);
                case 'utf8':
                    qrCode = await QRCode.toString(generateQrDto.data, { type: 'utf8' });
                    return res.send(qrCode);
                case 'png':
                default:
                    qrCode = await QRCode.toDataURL(generateQrDto.data);
                    return res.send(qrCode);
            }
        }
        catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
    async generateJsonQR(generateJsonQrDto, res) {
        try {
            const jsonString = JSON.stringify(generateJsonQrDto.jsonData);
            let qrCode;
            switch (generateJsonQrDto.format) {
                case 'svg':
                    qrCode = await QRCode.toString(jsonString, { type: 'svg' });
                    res.header('Content-Type', 'image/svg+xml');
                    return res.send(qrCode);
                case 'utf8':
                    qrCode = await QRCode.toString(jsonString, { type: 'utf8' });
                    return res.send(qrCode);
                case 'png':
                default:
                    qrCode = await QRCode.toDataURL(jsonString);
                    return res.send(qrCode);
            }
        }
        catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
};
exports.QrController = QrController;
__decorate([
    (0, common_1.Post)('generate'),
    (0, swagger_1.ApiOperation)({ summary: 'Generate a QR code' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Returns the generated QR code' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_qr_dto_1.GenerateQrDto, Object]),
    __metadata("design:returntype", Promise)
], QrController.prototype, "generateQR", null);
__decorate([
    (0, common_1.Post)('generate-json'),
    (0, swagger_1.ApiOperation)({ summary: 'Generate a QR code from JSON data' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Returns the generated QR code' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_qr_dto_1.GenerateJsonQrDto, Object]),
    __metadata("design:returntype", Promise)
], QrController.prototype, "generateJsonQR", null);
exports.QrController = QrController = __decorate([
    (0, swagger_1.ApiTags)('qr'),
    (0, common_1.Controller)('qr')
], QrController);
//# sourceMappingURL=qr.controller.js.map