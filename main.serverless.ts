import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';
import { Server } from 'http';

export async function createApp(): Promise<Server> {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors({
    origin: '*',
    credentials: false,
    allowedHeaders: '*',
  });
  await app.init();
  return app.getHttpAdapter().getInstance();
}
