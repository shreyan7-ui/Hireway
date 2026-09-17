import { Injectable, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service.js';

export interface CreateResourceRequestDto {
    company?: string;
    contact_name?: string;
    email?: string;
    phone?: string;
    resource_name?: string;
    resource_id?: string;
    request_type?: string;
    priority?: string;
    subject?: string;
    details?: string;
}

@Injectable()
export class ResourceRequestsService {
    constructor(private readonly supabase: SupabaseService) {}

    async create(dto: CreateResourceRequestDto) {
        const {
            company,
            contact_name,
            email,
            phone,
            resource_name,
            resource_id,
            request_type,
            priority,
            subject,
            details
        } = dto || {};

        if (
            !company ||
            !contact_name ||
            !email ||
            !request_type ||
            !subject ||
            !details
        ) {
            throw new BadRequestException(
                'company, contact_name, email, request_type, subject and details are required'
            );
        }

        const { data, error } = await this.supabase.client
            .from('resource_requests')
            .insert({
                company,
                contact_name,
                email,
                phone: phone || '',
                resource_name: resource_name || '',
                resource_id: resource_id || '',
                request_type,
                priority: priority || 'Medium',
                subject,
                details
            })
            .select('id, created_at, status')
            .single();

        if (error) {
            throw new InternalServerErrorException(error.message);
        }

        return { success: true, request: data };
    }

    async list(limit = 100) {
        const { data, error } = await this.supabase.client
            .from('resource_requests')
            .select(
                'id, company, contact_name, email, phone, resource_name, ' +
                'resource_id, request_type, priority, subject, details, ' +
                'status, created_at'
            )
            .order('created_at', { ascending: false })
            .limit(limit);

        if (error) {
            throw new InternalServerErrorException(error.message);
        }

        return data;
    }
}
