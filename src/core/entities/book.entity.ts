import Author from './author.entity';
import Genre from './genre.entity';

export default class Book {
  title: string;

  author: Author;

  genre: Genre;

  publishDate: Date;
}
