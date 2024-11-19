import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { createZodDto } from '@anatine/zod-nestjs';
import { schema } from '@packages/drizzle';
const { contact } = schema;

const createContactSchema = createInsertSchema(contact)
  .omit({
    id: true,
    created_at: true,
  })
  .required({ email: true, user: true });

const updateContactSchema = createInsertSchema(contact)
  .omit({
    id: true,
    created_at: true,
  })
  .required({ email: true, user: true });
const selectContactSchema = createSelectSchema(contact);

export class CreateContactDto extends createZodDto(createContactSchema) {}
export class UpdateContactDto extends createZodDto(updateContactSchema) {}
export class SelectContactDto extends createZodDto(selectContactSchema) {}
