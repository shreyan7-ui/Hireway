import { Injectable, OnModuleInit, InternalServerErrorException } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService implements OnModuleInit {
    private supabaseClient!: SupabaseClient;

    onModuleInit() {
        const url = process.env.SUPABASE_URL;
        const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

        if (!url || !key) {
            throw new InternalServerErrorException(
                'SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set'
            );
        }

        this.supabaseClient = createClient(url, key, {
            auth: { persistSession: false, autoRefreshToken: false }
        });
    }

    get client(): SupabaseClient {
        return this.supabaseClient;
    }
}
