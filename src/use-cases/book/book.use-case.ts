import { Injectable } from '@nestjs/common';
import { ICrmServices } from 'src/core/abstracts/crm-services.service';
import { IDataServices } from 'src/core/abstracts/data-services.abstract';
import Book from 'src/core/entities/book.entity';

@Injectable()
export default class BookUseCases {
  constructor(
    private dataServices: IDataServices,
    private crmServices: ICrmServices,
  ) {}

  getAllBooks(): Promise<Book[]> {
    return this.dataServices.books.getAll();
  }

  getBookById(id: any): Promise<Book> {
    return this.dataServices.books.get(id);
  }

  updateBook(bookId: string, book: Book): Promise<Book> {
    return this.dataServices.books.update(bookId, book);
  }

  // TODO: add communication with events here.
  // TODO: refactor to use the factory pattern.
  async createBook(book: Book): Promise<Book> {
    try {
      // call to our dependencies
      const createdBook = await this.dataServices.books.create(book);
      await this.crmServices.bookAdded(createdBook);

      return createdBook;
    } catch (error) {
      throw error;
    }
  }
}
