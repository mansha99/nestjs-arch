import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { ConverterService } from './converter.service';
import { CommaPipe } from './comma.pipe';
import { CommaInterceptor } from './comma.interceptor';

@Controller('intercept')
export class InterceptController {
  constructor(private readonly converterService: ConverterService) {}

  @Get('/convert/:inr')
  @UseInterceptors(CommaInterceptor)
  convert(@Param('inr', new CommaPipe()) inr: number): number {
    return this.converterService.convert(inr);
  }
}
