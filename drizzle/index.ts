import { resolve } from 'node:path';
import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import * as schema from './schema.js';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';

import { type DrizzleConfig } from 'drizzle-orm';

export const createDrizzle = (
  url: string,
  options: Omit<DrizzleConfig, 'schema'>,
) => {
  const client = postgres(url, {});
  return drizzle(client, {
    schema,
    ...options,
  });
};

export const migrateDb = async (url: string) => {
  const migrationConnection = postgres(url, { max: 1 });

  await migrate(drizzle(migrationConnection), {
    migrationsFolder: resolve(__dirname, '.'),
  });
};
type PgDatabase = PostgresJsDatabase<typeof schema>;

export { schema, PgDatabase as Database };

export default PgDatabase;
