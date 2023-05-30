import { Injectable } from "@angular/core";
import { BaseService } from "../app.service";

@Injectable()
export class BookService extends BaseService {
  private getBooksUrl = "/book/getBooks";
  constructor() {
    super();
  }

  public getBooks(): Promise<Book[]> {
    return this.get(this.getBooksUrl);
  }
}

export class Book {
  author: number = 0;
  authorName: string = ''
  title: string = "";
  publicationYear: number = 0;
  id: number = 0;
  description: string = '';
}
