import { Controller, Get, UseGuards } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { HealthDto } from './health.dto';
import { BaseGuard } from '../../../libs/auth/guards/base.guard';

@Controller('health')
export class HealthController {
  constructor() {}

  @Get()
  @UseGuards(BaseGuard)
  getHealth(): HealthDto {
    return plainToInstance(HealthDto, { status: 'ok' });
  }
}
