import { Injectable, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service.js';

export interface CreateApplicationDto {
    job_id?: string | null;
    name?: string;
    email?: string;
    phone?: string;
    resume_url?: string;
    cover_note?: string;
}

@Injectable()
export class ApplicationsService {
    constructor(private readonly supabase: SupabaseService) {}

    async create(dto: CreateApplicationDto) {
        const { job_id, name, email, phone, resume_url, cover_note } = dto || {};

        if (!name || !email) {
            throw new BadRequestException('name and email are required');
        }

        const { data, error } = await this.supabase.client
            .from('applications')
            .insert({
                job_id: job_id || null,
                name,
                email,
                phone: phone || '',
                resume_url: resume_url || '',
                cover_note: cover_note || ''
            })
            .select('id, created_at')
            .single();

        if (error) {
            throw new InternalServerErrorException(error.message);
        }

        return { success: true, application: data };
    }

    async count(): Promise<number> {
        const { count, error } = await this.supabase.client
            .from('applications')
            .select('*', { count: 'exact', head: true });

        if (error) {
            throw new InternalServerErrorException(error.message);
        }

        return count || 0;
    }
}
