import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service.js';

@Injectable()
export class JobsService {
    constructor(private readonly supabase: SupabaseService) {}

    async listActive() {
        const { data, error } = await this.supabase.client
            .from('jobs')
            .select(
                'id, title, department, location, employment_type, description'
            )
            .eq('active', true)
            .order('created_at', { ascending: false });

        if (error) {
            throw new InternalServerErrorException(error.message);
        }

        return data;
    }

    async countActive(): Promise<number> {
        const { count, error } = await this.supabase.client
            .from('jobs')
            .select('*', { count: 'exact', head: true })
            .eq('active', true);

        if (error) {
            throw new InternalServerErrorException(error.message);
        }

        return count || 0;
    }
}
