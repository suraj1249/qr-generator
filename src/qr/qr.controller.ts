import { Controller, Post, Body, Res } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Response } from 'express';
import * as QRCode from 'qrcode';
import { GenerateQrDto, GenerateJsonQrDto } from './dto/generate-qr.dto';

@ApiTags('qr')
@Controller('qr')
export class QrController {
  @Post('generate')
  @ApiOperation({ summary: 'Generate a QR code' })
  @ApiResponse({ status: 200, description: 'Returns the generated QR code' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  async generateQR(@Body() generateQrDto: GenerateQrDto, @Res() res: Response) {
    try {
      let qrCode: string;

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
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  @Post('generate-json')
  @ApiOperation({ summary: 'Generate a QR code from JSON data' })
  @ApiResponse({ status: 200, description: 'Returns the generated QR code' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  async generateJsonQR(
    @Body() generateJsonQrDto: GenerateJsonQrDto,
    @Res() res: Response,
  ) {
    try {
      // Convert JSON to string
      const jsonString = JSON.stringify(generateJsonQrDto.jsonData);

      let qrCode: string;

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
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}
