import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from './books/book.service';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private books: Book[] = [];
  private dataArraySubject: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>(this.books);

  getDataArray() {
    return this.dataArraySubject.asObservable();
  }

  pushDataToArr(data: Book) {
    this.books.push(data);
    this.dataArraySubject.next(this.books);
  }
}
