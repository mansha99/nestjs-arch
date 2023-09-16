import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SimpleController } from './simple.controller';
import { ServiceController } from './service.controller';
import { ConverterService } from './converter.service';
import { SmartController } from './smart.controller';
import { CommaInterceptor } from './comma.interceptor';
import { InterceptController } from './intercept.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    SimpleController,
    ServiceController,
    SmartController,
    InterceptController,
  ],
  providers: [AppService, ConverterService, CommaInterceptor],
})
export class AppModule {}
