import { Body, Controller, Post } from '@nestjs/common';
import { ResourceRequestsService } from './resource-requests.service.js';
import type { CreateResourceRequestDto } from './resource-requests.service.js';

@Controller('resource-requests')
export class ResourceRequestsController {
    constructor(
        private readonly resourceRequests: ResourceRequestsService
    ) {}

    @Post()
    create(@Body() body: CreateResourceRequestDto) {
        return this.resourceRequests.create(body);
    }
}
