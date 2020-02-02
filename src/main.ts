import { AbstractHttpAdapter, NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';
import { create } from 'domain';

export async function createApp(httpAdapter?: AbstractHttpAdapter): Promise<INestApplication> {
  let app: NestApplication;

  if (httpAdapter) {
    app = await NestFactory.create(AppModule, httpAdapter);
  } else {
    app = await NestFactory.create(AppModule);
  }

  app.setGlobalPrefix('api/v1');

  return app;
}

async function bootstrap() {
  const app = await createApp();
  await app.listen(5454);
}
bootstrap();
