import { Injectable } from '@nestjs/common';
import { ICrmServices } from 'src/core/abstracts/crm-services.service';
import Book from 'src/core/entities/book.entity';

@Injectable()
export class SalesforceService implements ICrmServices {
  bookAdded(book: Book): Promise<boolean> {
    // Implement salesforce api logic

    return Promise.resolve(true);
  }
}
