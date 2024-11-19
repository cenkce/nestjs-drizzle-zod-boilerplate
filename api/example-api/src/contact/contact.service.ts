import { Inject, Injectable } from '@nestjs/common';
import { schema } from '@packages/drizzle';
import PgDatabase from '@packages/drizzle';
import { CreateContactDto, UpdateContactDto } from './contact.dto';
import { eq } from 'drizzle-orm';

@Injectable()
export class ContactService {
  constructor(@Inject('DB') private db: PgDatabase) {}

  async createContact(contactData: CreateContactDto) {
    return await this.db
      .insert(schema.contact)
      .values({
        created_at: new Date(),
        email: contactData.email,
        lastname: contactData.lastname,
        name: contactData.name,
        user: contactData.user,
      })
      ?.execute();
  }

  async getContactById(contactId: number) {
    return await this.db
      .select()
      .from(schema.contact)
      .where(eq(schema.contact.id, contactId));
  }

  async updateContact(
    contactId: number,
    contactData: UpdateContactDto,
  ): Promise<any> {
    return await this.db
      .update(schema.contact)
      .set(contactData)
      .where(eq(schema.contact.id, contactId));
  }

  async deleteContact(contactId: number) {
    return await this.db
      .delete(schema.contact)
      .where(eq(schema.contact.id, contactId));
  }

  async getAllContacts(): Promise<any[]> {
    return await this.db.select().from(schema.contact);
  }
}
