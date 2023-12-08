import { Module } from '@nestjs/common';
import { DataServicesModule } from './services/data-services/data-services.module';
import { BookUseCasesModule } from './use-cases/book/book-use-cases.module';
import { AuthorUseCasesModule } from './use-cases/author/author-use-cases.module';
import { GenreUseCasesModule } from './use-cases/genre/genre-use-cases.module';
import { CrmServicesModule } from './services/crm-services/crm-services.module';
import { AppController } from './controllers/app.controller';
import { BookController } from './controllers/book.controller';
import { AuthorController } from './controllers/author.controller';
import { GenreController } from './controllers/genre.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DataServicesModule,
    CrmServicesModule,
    BookUseCasesModule,
    AuthorUseCasesModule,
    GenreUseCasesModule,
  ],
  controllers: [
    AppController,
    BookController,
    AuthorController,
    GenreController,
  ],
  providers: [],
})
export class AppModule {}
