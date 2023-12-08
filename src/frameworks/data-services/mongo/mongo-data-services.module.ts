import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoDataServices } from './mongo-data-services.service';
import { Author, AuthorSchema } from './model/author.model';
import { Book, BookSchema } from './model/book.model';
import { Genre, GenreSchema } from './model/genre.model';
import { IDataServices } from 'src/core/abstracts/data-services.abstract';
import { DATA_BASE_CONFIGURATION } from 'src/configuration';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      { name: Author.name, schema: AuthorSchema },
      { name: Book.name, schema: BookSchema },
      { name: Genre.name, schema: GenreSchema },
    ]),
    MongooseModule.forRoot(process.env.CLEAN_NEST_MONGO_CONNECTION_STRING),
  ],
  providers: [
    {
      provide: IDataServices,
      useClass: MongoDataServices,
    },
  ],
  exports: [IDataServices],
})
export class MongoDataServicesModule {}
