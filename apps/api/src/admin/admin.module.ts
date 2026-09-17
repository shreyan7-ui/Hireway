import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller.js';
import { LeadsModule } from '../leads/leads.module.js';
import { JobsModule } from '../jobs/jobs.module.js';
import { ApplicationsModule } from '../applications/applications.module.js';
import { ResourceRequestsModule } from '../resource-requests/resource-requests.module.js';

@Module({
    imports: [
        LeadsModule,
        JobsModule,
        ApplicationsModule,
        ResourceRequestsModule
    ],
    controllers: [AdminController]
})
export class AdminModule {}
