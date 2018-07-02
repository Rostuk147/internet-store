import { Component, OnInit } from '@angular/core';
import {BookService} from "../../shared/service/book.service";
import {Book} from "../../shared/model/books.model";

@Component({
  selector: 'app-latest-book',
  templateUrl: './latest-book.component.html',
  styleUrls: ['./latest-book.component.sass']
})
export class LatestBookComponent implements OnInit {

  books: Book[] = [];
  lastBook:  Book[] = [];

  constructor(
    private service: BookService
  ) { }

  ngOnInit() {

    this.service.getAllBooks()
      .subscribe((data: Book[])=>{
        this.books = data;
        this.lastBook = this.books.slice(-3);
      });
  }

}
