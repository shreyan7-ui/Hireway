# HIREWAY

HIREWAY is an IT services, consulting and technology workforce platform.

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

The frontend and backend remain separate applications:

- `apps/web` — Next.js frontend
- `apps/api` — NestJS backend
- `apps/api/migrations` — PostgreSQL schema migrations
- `postman` — API test collection and environment

## Website

The original HIREWAY visual system is preserved:

- Glassmorphism cards
- 3D hover tilt
- Scroll reveal
- Parallax motion
- Floating 3D hero objects
- Animated network nodes
- Dark engagement sections
- Resource Desk
- Careers/job listing
- Responsive mobile layout

## Database

The application uses Supabase PostgreSQL.

Tables:

- `leads`
- `jobs`
- `applications`
- `resource_requests`

The backend uses Supabase's server-side client for application queries and a PostgreSQL connection for migrations/seeding.

## Local setup

### 1. Install dependencies

From the project root:

```bash
npm install
```

### 2. Configure the API

Copy:

```text
apps/api/.env.example
```

to:

```text
apps/api/.env
```

Fill in your Supabase URL, service-role key, PostgreSQL connection string and admin token.

Never commit `.env`.

### 3. Configure the web app

Copy:

```text
apps/web/.env.local.example
```

to:

```text
apps/web/.env.local
```

The default API URL is:

```text
http://localhost:3001/api
```

### 4. Create the database schema

```bash
npm run db:migrate
```

### 5. Seed initial job data

```bash
npm run db:seed
```

### 6. Start frontend and backend

```bash
npm run dev
```

Frontend:

```text
http://localhost:3000
```

API:

```text
http://localhost:3001/api
```

## Postman

Import:

```text
postman/Hireway.postman_collection.json
postman/Hireway.postman_environment.json
```

The collection contains tests for:

### Public

```text
POST /api/leads
GET  /api/jobs
POST /api/applications
POST /api/resource-requests
```

### Admin

```text
GET   /api/admin/dashboard
GET   /api/admin/leads
PATCH /api/admin/leads
GET   /api/admin/resource-requests
```

Set `adminToken` in Postman to the same value as `ADMIN_TOKEN` in `apps/api/.env`.

## Important

Do not put:

- Supabase service-role keys
- PostgreSQL passwords
- database connection strings
- admin tokens

into GitHub, screenshots, Postman public collections or frontend environment variables.

The service-role key and PostgreSQL credentials belong only on the server.
