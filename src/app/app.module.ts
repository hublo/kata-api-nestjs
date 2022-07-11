import { Module } from '@nestjs/common';
import { HealthController } from './health/controller/health.controller';
import { AppConfig } from './app.config';
import { BaseGuard } from '../libs/auth/guards/base.guard';

@Module({
  imports: [],
  controllers: [HealthController],
  providers: [AppConfig, BaseGuard],
})
export class AppModule {}
