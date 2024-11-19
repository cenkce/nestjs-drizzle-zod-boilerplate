import { Controller } from '@nestjs/common';
import { Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto, UpdateContactDto } from './contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get()
  findAll() {
    return this.contactService.getAllContacts();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.contactService.getContactById(id);
  }

  @Post()
  create(@Body() createContactDto: CreateContactDto) {
    return this.contactService.createContact(createContactDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateContactDto: UpdateContactDto) {
    return this.contactService.updateContact(id, updateContactDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.contactService.deleteContact(id);
  }
}
