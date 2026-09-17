import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SupabaseModule } from './supabase/supabase.module.js';
import { LeadsModule } from './leads/leads.module.js';
import { JobsModule } from './jobs/jobs.module.js';
import { ApplicationsModule } from './applications/applications.module.js';
import { ResourceRequestsModule } from './resource-requests/resource-requests.module.js';
import { AdminModule } from './admin/admin.module.js';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        SupabaseModule,
        LeadsModule,
        JobsModule,
        ApplicationsModule,
        ResourceRequestsModule,
        AdminModule
    ]
})
export class AppModule {}
