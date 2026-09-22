import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module.js';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.setGlobalPrefix('api');

    const envOrigins = (process.env.WEB_ORIGIN || '')
        .split(',')
        .map((value) => value.trim())
        .filter(Boolean);

    const origins = Array.from(
        new Set([
            'http://localhost:3000',
            'http://localhost:3002',
            ...envOrigins
        ])
    );

    app.enableCors({
        origin: origins,
        credentials: true,
        methods: ['GET', 'POST', 'PATCH', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'x-admin-token']
    });

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            transform: true,
            forbidNonWhitelisted: false
        })
    );

    const port = Number(process.env.PORT || 3001);
    await app.listen(port);

    console.log(`\nHireway API running on http://localhost:${port}/api`);
    console.log(`CORS allowed origins: ${origins.join(', ')}\n`);
}

bootstrap();
