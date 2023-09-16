import { Controller, Get, Param } from '@nestjs/common';
import { ConverterService } from './converter.service';
import { CommaPipe } from './comma.pipe';

@Controller('smart')
export class SmartController {
  constructor(private readonly converterService: ConverterService) {}

  @Get('/convert/:inr')
  convert(@Param('inr', new CommaPipe()) inr: number): number {
    return this.converterService.convert(inr);
  }
}
