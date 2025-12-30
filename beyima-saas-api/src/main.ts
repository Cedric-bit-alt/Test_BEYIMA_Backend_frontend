import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {

  

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  // Autoriser CORS
  app.enableCors({
    origin: 'http://localhost:5173', // ton frontend
    credentials: true,               // si tu envoies cookies / JWT
  });
  
  await app.listen(process.env.PORT ?? 3000);


  

}
bootstrap();
