import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

require('dotenv-flow').config({ silent: true });
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap(serviceName: string, port: string) {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      bodyLimit: 1024 * 1024 * 5,
      ignoreTrailingSlash: true,
    }),
  );
  await app.listen(3000, () => {
    console.debug(`${serviceName} listening on port ${port}`);
  });
}

bootstrap(process.env.SERVICE_NAME, process.env.PORT);
