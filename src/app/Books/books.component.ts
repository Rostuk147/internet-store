import { Component, OnInit } from '@angular/core';
import {BookService} from "../shared/service/service";
import {Book} from "../shared/model/books.model";



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.sass']
})
export class BooksComponent implements OnInit {

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
