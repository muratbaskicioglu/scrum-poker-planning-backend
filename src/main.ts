import { AbstractHttpAdapter, NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { ConfigService } from './config/config.service';

export async function createApp(httpAdapter?: AbstractHttpAdapter): Promise<INestApplication> {
  let app: INestApplication;

  if (httpAdapter) {
    app = await NestFactory.create(AppModule, httpAdapter);
  } else {
    app = await NestFactory.create(AppModule);
  }

  const endpointPrefix = 'api/v1';

  app.setGlobalPrefix(endpointPrefix);

  const options = new DocumentBuilder()
    .setTitle('Scrum Poker Planning')
    .setDescription('Scrum Poker Planning API Documentation')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('documentation', app, document);

  return app;
}

async function bootstrap() {
  const app = await createApp();
  const { serverConfig: { port } } = app.get<ConfigService>(ConfigService);
  await app.listen(port);
}
bootstrap();
