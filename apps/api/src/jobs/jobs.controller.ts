import { Controller, Get } from '@nestjs/common';
import { JobsService } from './jobs.service.js';

@Controller('jobs')
export class JobsController {
    constructor(private readonly jobs: JobsService) {}

    @Get()
    list() {
        return this.jobs.listActive();
    }
}
