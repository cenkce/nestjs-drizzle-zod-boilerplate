import { integer, pgTable, text, timestamp } from 'drizzle-orm/pg-core';

export const contact = pgTable('contact', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  lastname: text('lastname').notNull(),
  created_at: timestamp('created_at').notNull(),
  user: text('user').notNull(),
});
