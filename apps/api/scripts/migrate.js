import 'dotenv/config';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Client } from 'pg';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function run() {
    const connectionString = process.env.SUPABASE_DB_URL;

    if (!connectionString) {
        console.error(
            '[migrate] SUPABASE_DB_URL is not set. Copy .env.example to .env and set it.'
        );
        process.exit(1);
    }

    const client = new Client({
        connectionString,
        ssl: { rejectUnauthorized: false }
    });

    await client.connect();

    const dir = path.join(__dirname, '..', 'migrations');
    const files = fs
        .readdirSync(dir)
        .filter((f) => f.endsWith('.sql'))
        .sort();

    for (const file of files) {
        const sql = fs.readFileSync(path.join(dir, file), 'utf8');
        console.log(`[migrate] applying ${file}`);
        await client.query(sql);
    }

    console.log('[migrate] done');
    await client.end();
}

run().catch((err) => {
    console.error('[migrate] failed:', err.message);
    process.exit(1);
});
