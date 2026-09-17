import { Injectable, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service.js';

export interface CreateLeadDto {
    name?: string;
    email?: string;
    company?: string;
    model?: string;
    message?: string;
}

@Injectable()
export class LeadsService {
    constructor(private readonly supabase: SupabaseService) {}

    async create(dto: CreateLeadDto) {
        const { name, email, company, model, message } = dto || {};

        if (!name || !email || !message) {
            throw new BadRequestException(
                'name, email and message are required'
            );
        }

        const { data, error } = await this.supabase.client
            .from('leads')
            .insert({
                name,
                email,
                company: company || '',
                model: model || '',
                message
            })
            .select('id, created_at')
            .single();

        if (error) {
            throw new InternalServerErrorException(error.message);
        }

        return { success: true, lead: data };
    }

    async list(limit = 100) {
        const { data, error } = await this.supabase.client
            .from('leads')
            .select(
                'id, name, email, company, model, message, status, created_at'
            )
            .order('created_at', { ascending: false })
            .limit(limit);

        if (error) {
            throw new InternalServerErrorException(error.message);
        }

        return data;
    }

    async updateStatus(id: string, status: string) {
        if (!id || !status) {
            throw new BadRequestException('id and status are required');
        }

        const { error } = await this.supabase.client
            .from('leads')
            .update({ status })
            .eq('id', id);

        if (error) {
            throw new InternalServerErrorException(error.message);
        }

        return { success: true };
    }

    async counts() {
        const client = this.supabase.client;

        const [total, newLeads] = await Promise.all([
            client
                .from('leads')
                .select('*', { count: 'exact', head: true }),
            client
                .from('leads')
                .select('*', { count: 'exact', head: true })
                .eq('status', 'new')
        ]);

        if (total.error || newLeads.error) {
            throw new InternalServerErrorException(
                total.error?.message || newLeads.error?.message
            );
        }

        return { total: total.count || 0, new: newLeads.count || 0 };
    }
}
