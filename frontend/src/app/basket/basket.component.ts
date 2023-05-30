import { Component } from '@angular/core';
import { BaseService } from '../app.service';
import { DataSharingService } from '../datasharing.service';
import { Book } from '../books/book.service';
@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {

  books: Book[];

  constructor(private dataSharingService: DataSharingService) {}

  ngOnInit() {
    this.dataSharingService.getDataArray().subscribe((books) => {
      this.books = books;
    });
  }



}
