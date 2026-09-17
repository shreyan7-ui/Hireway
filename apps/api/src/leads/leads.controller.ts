import { Body, Controller, Post } from '@nestjs/common';
import { LeadsService } from './leads.service.js';
import type { CreateLeadDto } from './leads.service.js';

@Controller('leads')
export class LeadsController {
    constructor(private readonly leads: LeadsService) {}

    @Post()
    create(@Body() body: CreateLeadDto) {
        return this.leads.create(body);
    }
}
