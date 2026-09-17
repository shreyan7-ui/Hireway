import {
    Body,
    Controller,
    Get,
    Patch,
    UseGuards
} from '@nestjs/common';
import { AdminGuard } from '../auth/admin.guard.js';
import { LeadsService } from '../leads/leads.service.js';
import { JobsService } from '../jobs/jobs.service.js';
import { ApplicationsService } from '../applications/applications.service.js';
import { ResourceRequestsService } from '../resource-requests/resource-requests.service.js';

@Controller('admin')
@UseGuards(AdminGuard)
export class AdminController {
    constructor(
        private readonly leads: LeadsService,
        private readonly jobs: JobsService,
        private readonly applications: ApplicationsService,
        private readonly resourceRequests: ResourceRequestsService
    ) {}

    @Get('dashboard')
    async dashboard() {
        const [leadCounts, activeJobs, applicationsCount] = await Promise.all([
            this.leads.counts(),
            this.jobs.countActive(),
            this.applications.count()
        ]);

        return {
            leads: leadCounts.total,
            new_leads: leadCounts.new,
            active_jobs: activeJobs,
            applications: applicationsCount
        };
    }

    @Get('leads')
    listLeads() {
        return this.leads.list();
    }

    @Patch('leads')
    updateLead(@Body() body: { id: string; status: string }) {
        return this.leads.updateStatus(body?.id, body?.status);
    }

    @Get('resource-requests')
    listResourceRequests() {
        return this.resourceRequests.list();
    }
}
