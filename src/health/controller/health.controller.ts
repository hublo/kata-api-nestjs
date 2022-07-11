import { Controller, Get } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';

@Controller('health')
export class HealthController {
  constructor() {}

  @Get()
  getHealth(): HealthDto {
    return plainToInstance(HealthDto, { status: 'ok' });
  }
}
