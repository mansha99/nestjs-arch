import { Controller, Get, Param } from '@nestjs/common';
import { ConverterService } from './converter.service';
@Controller('service')
export class ServiceController {
  constructor(private readonly converterService: ConverterService) {}

  @Get('/convert/:inr')
  convert(@Param('inr') inr: number): number {
    return this.converterService.convert(inr);
  }
}
