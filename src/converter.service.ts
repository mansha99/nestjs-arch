import { Injectable } from '@nestjs/common';

@Injectable()
export class ConverterService {
  convert(inr: number): number {
    return inr * 80;
  }
}
