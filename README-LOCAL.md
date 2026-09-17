# HIREWAY — Local Development

Monorepo:

- `apps/web/` — Next.js App Router frontend
- `apps/api/` — NestJS backend
- `postman/` — Postman collection + environment
- `apps/api/migrations/` — Supabase PostgreSQL migrations

## Architecture

```text
Next.js frontend
       |
       v
NestJS REST API
       |
       v
Supabase PostgreSQL
```

The original HIREWAY visual design and page content are preserved while the application architecture remains Next.js + NestJS + Supabase PostgreSQL.

## Requirements

- Node.js 20+
- Supabase project
- Postman

## 1. Install

From the repo root:

```powershell
npm install
```

## 2. Configure the backend

Copy the example environment file:

```powershell
Copy-Item apps/api/.env.example apps/api/.env
```

Fill in:

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `SUPABASE_DB_URL`
- `ADMIN_TOKEN`
- `PORT`
- `WEB_ORIGIN`

The service-role key, PostgreSQL password and database connection string are server-only secrets.

## 3. Configure the frontend

Copy:

```powershell
Copy-Item apps/web/.env.local.example apps/web/.env.local
```

Default:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001/api
```

## 4. Create the Supabase database schema

```powershell
npm run db:migrate
```

Then seed the initial job:

```powershell
npm run db:seed
```

Reset the schema and seed data if required:

```powershell
npm run db:reset
```

You can also run the SQL files manually from Supabase SQL Editor.

## 5. Start HIREWAY

Run both applications:

```powershell
npm run dev
```

Frontend:

```text
http://localhost:3000
```

Backend:

```text
http://localhost:3001/api
```

Or run them individually:

```powershell
npm run dev:web
npm run dev:api
```

## 6. Postman

Import:

```text
postman/Hireway.postman_collection.json
postman/Hireway.postman_environment.json
```

Select the `Hireway Local` environment.

Set:

```text
baseUrl = http://localhost:3001
adminToken = your ADMIN_TOKEN value
```

### Public APIs

```text
POST /api/leads
GET  /api/jobs
POST /api/applications
POST /api/resource-requests
```

### Admin APIs

```text
GET   /api/admin/dashboard
GET   /api/admin/leads
PATCH /api/admin/leads
GET   /api/admin/resource-requests
```

Admin requests require:

```text
x-admin-token: your ADMIN_TOKEN
```

## Website pages

```text
/
 /about
 /services
 /clients
 /careers
 /contact
 /resource-request
 /login
 /admin
```

The frontend preserves:

- Glassmorphism
- 3D card tilt
- Scroll reveal
- Parallax
- Floating hero objects
- Animated network nodes
- Dark engagement sections
- Resource Desk
- Careers
- Enterprise service/client content
- Responsive layout

## Security

Never commit or share:

- `apps/api/.env`
- `apps/web/.env.local`
- Supabase service-role keys
- PostgreSQL passwords
- Full PostgreSQL connection strings
- Production admin tokens

The repository includes example environment files with placeholders only.
