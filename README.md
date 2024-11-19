## Nestjs project boilerplate with Drizzle, Zod, Posgtres, Redis, Docker and Swagger.

### Installation

- Run `pnpm install`
- Run `chmod +x scripts/initdb.sh` to initialize db when running `docker compose up`

### Development

- Run `cp .env.example .env`
- Run `pnpm dev` for api only
- Run `pnpm db:dev` to work with api and drizzle package together

### Migration

- Run `pnpm db:generate` to generate migration files
- Run `pnpm db:migrate` to migrate Drizzle schemas
