import { Response } from 'express';
import { GenerateQrDto, GenerateJsonQrDto } from './dto/generate-qr.dto';
export declare class QrController {
    generateQR(generateQrDto: GenerateQrDto, res: Response): Promise<Response<any, Record<string, any>>>;
    generateJsonQR(generateJsonQrDto: GenerateJsonQrDto, res: Response): Promise<Response<any, Record<string, any>>>;
}
