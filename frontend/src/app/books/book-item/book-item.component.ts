import { Component, Input } from '@angular/core';
import { Book } from "../book.service";
import { DataSharingService } from 'src/app/datasharing.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})

export class BookItemComponent {
  @Input() bookData: Book

  constructor(private dataSharingService: DataSharingService) {}

  addToBasket(bookData) {
    this.dataSharingService.pushDataToArr(bookData);
  }
}
