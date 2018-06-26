import { Component, OnInit } from '@angular/core';
import {BookService} from "../../shared/service/book.service";
import {Book} from "../../shared/model/books.model";

@Component({
  selector: 'app-books-catalog',
  templateUrl: './books-catalog.component.html',
  styleUrls: ['./books-catalog.component.sass']
})
export class BooksCatalogComponent implements OnInit {

  allBooks: Book[] = [];


  constructor(
    private service: BookService

  ) { }

  ngOnInit() {
    this.service.getAllBooks()
      .subscribe((books:Book[])=>{
        this.allBooks = books;
      })
  }

}
