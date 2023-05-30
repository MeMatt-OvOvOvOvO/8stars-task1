import { Component, OnInit } from "@angular/core";
import { BookService, Book } from "../book.service";
@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.scss"],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  selectedBook;
  bookData;
  constructor(private bookService: BookService) {}

  async ngOnInit() {
    this.books = await this.bookService.getBooks();
  }

  select(bookId) {
    this.selectedBook = bookId;

  }
}

