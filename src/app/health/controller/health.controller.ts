import { Controller, Get, UseGuards } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { HealthDto } from './health.dto';

@Controller('health')
export class HealthController {
  constructor() {}

  @Get()
  getHealth(): HealthDto {
    return plainToInstance(HealthDto, { status: 'ok' });
  }
}
