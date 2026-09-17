import { Body, Controller, Post } from '@nestjs/common';
import { ApplicationsService } from './applications.service.js';
import type { CreateApplicationDto } from './applications.service.js';

@Controller('applications')
export class ApplicationsController {
    constructor(private readonly applications: ApplicationsService) {}

    @Post()
    create(@Body() body: CreateApplicationDto) {
        return this.applications.create(body);
    }
}
