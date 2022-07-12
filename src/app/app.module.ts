import { Module } from '@nestjs/common';
import { HealthController } from './health/controller/health.controller';
import { AppConfig } from './app.config';

@Module({
  imports: [],
  controllers: [HealthController],
  providers: [AppConfig],
})
export class AppModule {}
