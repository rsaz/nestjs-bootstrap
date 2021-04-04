import { AppModule } from './AppModule';
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    await app.listen(3333);
}

bootstrap();