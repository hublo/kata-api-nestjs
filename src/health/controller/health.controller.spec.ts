import { Test, TestingModule } from '@nestjs/testing';
import { HealthController } from './health.controller';

describe('HealthController', () => {
  let appController: HealthController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
      providers: [],
    }).compile();

    appController = app.get<HealthController>(HealthController);
  });

  describe('Health check controller', () => {
    it('should return "ok"', () => {
      expect(appController.getHealth()).toBe('ok');
    });
  });
});
