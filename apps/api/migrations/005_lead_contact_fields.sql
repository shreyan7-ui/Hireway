ALTER TABLE leads
    ADD COLUMN IF NOT EXISTS phone text,
    ADD COLUMN IF NOT EXISTS whatsapp text;