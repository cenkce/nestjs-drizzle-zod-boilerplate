import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactModule } from './contact/contact.module';
import { DrizzlePostgresModule } from '@knaadh/nestjs-drizzle-postgres';
import { schema } from '@packages/drizzle';

@Module({
  imports: [
    DrizzlePostgresModule.register({
      tag: 'DB',
      postgres: {
        url: process.env.DATABASE_URL || '',
      },
      config: { schema: { ...schema } },
    }),
    ContactModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
