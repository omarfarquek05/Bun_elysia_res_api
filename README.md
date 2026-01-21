# Elysia + Bun + Neon + Drizzle CRUD API with OpenAPI

## Project Overview

This project is a **full-stack REST API** built using **Bun runtime** and **Elysia framework**. It connects to a **serverless PostgreSQL database hosted on Neon** and uses **Drizzle ORM** for database interactions. The API supports **full CRUD operations** on a `users` table and provides **OpenAPI / Swagger documentation** for all endpoints.

### Key Features
- **Runtime:** Bun (Fast JavaScript/TypeScript runtime)
- **Framework:** Elysia (Minimal, high-performance web framework)
- **Database:** PostgreSQL (Neon serverless)
- **ORM:** Drizzle ORM (`drizzle-orm/neon-http`)
- **API Documentation:** OpenAPI via `@elysiajs/openapi`
- **Validation (optional):** Zod schema for request body validation
- **Routes:** `/users` CRUD, `/health`, `/docs`

---

## Project Structure

bun_with_elysia/
├─ src/
│ ├─ db/
│ │ ├─ index.ts ← DB connection
│ │ └─ schema.ts ← Drizzle table schema
│ ├─ models/
│ │ └─ user.model.ts ← Model functions (CRUD logic)
│ ├─ controllers/
│ │ └─ user.controller.ts
│ ├─ routes/
│ │ └─ user.routes.ts ← Routes setup
│ ├─ app.ts ← Elysia app configuration
│ └─ index.ts ← Server entrypoint
├─ .env ← Environment variables
├─ package.json
├─ tsconfig.json
└─ bun.lockb

yaml
Copy code

---

## Database

### Type
- **PostgreSQL** hosted on **Neon serverless**  
- Accessible via `postgresql://` connection string

### Schema
- Table: `users`
- Columns:
  - `id`: integer, primary key, auto increment
  - `name`: string, not null
  - `email`: string, unique, not null
  - `age`: integer, not null
  - `createdAt`: timestamp, default now

### Drizzle ORM
- Schema defined using `pgTable` (Drizzle ORM)
- Model functions (`UserModel`) wrap CRUD operations

### Schema vs Model
- **Schema:** DB table definition (columns, types)
- **Model:** Application layer to read/write data using the schema

---

## API Endpoints

| Method | Route         | Description              | Request Body Example                            | Response Example |
|--------|---------------|-------------------------|-----------------------------------------------|----------------|
| GET    | `/`           | Test API root           | —                                             | `"Hello Elysia + OpenAPI!"` |
| GET    | `/health`     | Health check            | —                                             | `{ "status": "ok" }` |
| POST   | `/users`      | Create new user         | `{ "name": "John", "email": "john@mail.com", "age": 30 }` | `{ "id": 1, "name": "John", "email": "john@mail.com", "age": 30 }` |
| GET    | `/users`      | Get all users           | —                                             | `[ {...}, {...} ]` |
| GET    | `/users/:id`  | Get single user         | —                                             | `{ "id": 1, "name": "John", ... }` |
| PUT    | `/users/:id`  | Update user             | `{ "name": "John Doe", "age": 31 }`          | `{ "id": 1, "name": "John Doe", "age": 31 }` |
| DELETE | `/users/:id`  | Delete user             | —                                             | `{ "message": "User deleted" }` |
| GET    | `/docs`       | Swagger / OpenAPI docs  | —                                             | OpenAPI UI     |

---

## Installation & Setup

### 1. Clone Repo
```bash
git clone <repo-url>
cd bun_with_elysia
2. Install Dependencies
bash
Copy code
bun install
bun add @elysiajs/openapi drizzle-orm/neon-http @neondatabase/serverless dotenv
3. Configure .env
env
Copy code
PORT=3001
DATABASE_URL=postgresql://<user>:<password>@<host>/<db>?sslmode=require
SECRET_KEY=your_secret_key_here
DEBUG=true
Important: Remove psql or quotes from DATABASE_URL. Only pure URL is allowed.

4. Create DB Tables
bash
Copy code
bunx drizzle-kit push
5. Run Server
bash
Copy code
bun run src/index.ts
OpenAPI / Swagger Docs
Visit: http://localhost:3001/docs

All endpoints documented with request body, response, description

Testing Example JSON
POST /users
json
Copy code
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "age": 30
}
GET /users
json
Copy code
[
  { "id": 1, "name": "John Doe", "email": "john.doe@example.com", "age": 30 },
  { "id": 2, "name": "Jane Smith", "email": "jane.smith@example.com", "age": 25 }
]
Best Practices
Schema changes → drizzle-kit generate → drizzle-kit push

Model changes → update functions, no DB push needed

Use Zod validation for request bodies

Keep .env secure; never commit credentials

Summary
This project demonstrates:

Fast server with Bun + Elysia

Serverless PostgreSQL using Neon

Drizzle ORM for type-safe DB operations

Swagger / OpenAPI docs via @elysiajs/openapi

Clean MVC structure: schema → model → controller → routes → app

You now have a production-ready CRUD API template for modern TypeScript + Bun projects.