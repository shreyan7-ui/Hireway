require('dotenv').config();

const fs = require('fs');
const path = require('path');
const { Client } = require('pg');

async function run() {
    const connectionString = process.env.SUPABASE_DB_URL;

    if (!connectionString) {
        console.error('[seed] SUPABASE_DB_URL is not set.');
        process.exit(1);
    }

    const file = path.join(__dirname, '..', 'seed.sql');

    if (!fs.existsSync(file)) {
        console.log('[seed] seed.sql not found, skipping');
        return;
    }

    const sql = fs.readFileSync(file, 'utf8').trim();

    if (!sql) {
        console.log('[seed] seed.sql is empty, skipping');
        return;
    }

    const client = new Client({
        connectionString,
        ssl: { rejectUnauthorized: false }
    });

    await client.connect();
    console.log('[seed] applying seed.sql');
    await client.query(sql);
    console.log('[seed] done');
    await client.end();
}

run().catch(err => {
    console.error('[seed] failed:', err.message);
    process.exit(1);
});
