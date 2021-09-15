import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as cors from 'cors';
import * as morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  app.use(morgan('dev'));
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
