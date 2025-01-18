export declare class GenerateQrDto {
    data: string;
    format?: 'png' | 'svg' | 'utf8';
}
export declare class GenerateJsonQrDto {
    jsonData: Record<string, any>;
    format?: 'png' | 'svg' | 'utf8';
}
