import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEnum,
  IsObject,
} from 'class-validator';

export class GenerateQrDto {
  @ApiProperty({
    example: 'https://example.com',
    description: 'The text or URL to encode in the QR code',
  })
  @IsString()
  @IsNotEmpty()
  data: string;

  @ApiProperty({
    example: 'png',
    description: 'The output format of the QR code',
    enum: ['png', 'svg', 'utf8'],
    default: 'png',
  })
  @IsOptional()
  @IsEnum(['png', 'svg', 'utf8'])
  format?: 'png' | 'svg' | 'utf8' = 'png';
}

export class GenerateJsonQrDto {
  @ApiProperty({
    example: {
      name: 'John Doe',
      email: 'john@example.com',
      id: '12345',
    },
    description: 'The JSON data to encode in the QR code',
  })
  @IsObject()
  @IsNotEmpty()
  jsonData: Record<string, any>;

  @ApiProperty({
    example: 'png',
    description: 'The output format of the QR code',
    enum: ['png', 'svg', 'utf8'],
    default: 'png',
  })
  @IsOptional()
  @IsEnum(['png', 'svg', 'utf8'])
  format?: 'png' | 'svg' | 'utf8' = 'png';
}
