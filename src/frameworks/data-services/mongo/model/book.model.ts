import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Author } from './author.model';
import { Genre } from './genre.model';

export type BookDocument = Book & Document;

@Schema()
export class Book {
  @Prop({ required: true, unique: true })
  title: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true })
  author: Author;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Genre', required: true })
  genre: Genre;

  @Prop()
  publishDate: Date;
}

export const BookSchema = SchemaFactory.createForClass(Book);
