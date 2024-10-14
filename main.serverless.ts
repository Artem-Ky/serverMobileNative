import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';
import { Server } from 'http';

export async function createApp(): Promise<Server> {
  const app = await NestFactory.create(AppModule);
  await app.init();
  return app.getHttpAdapter().getInstance();
}
