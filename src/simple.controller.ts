import { Controller, Get, Param } from '@nestjs/common';
@Controller('simple')
export class SimpleController {
  @Get('/convert/:inr')
  convert(@Param('inr') inr: number): number {
    return inr * 80;
  }
}
