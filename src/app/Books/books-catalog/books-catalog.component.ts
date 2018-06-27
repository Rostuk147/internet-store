import {Component, Input, OnInit} from '@angular/core';
import {BookService} from "../../shared/service/book.service";
import {Book} from "../../shared/model/books.model";

@Component({
  selector: 'app-books-catalog',
  templateUrl: './books-catalog.component.html',
  styleUrls: ['./books-catalog.component.sass']
})
export class BooksCatalogComponent implements OnInit {

  allBooks: Book[] = [];
  orderBook = [];
  IforderBookinStorage = [];

  constructor(
    private service: BookService
  ) { }

  ngOnInit() {

    this.IforderBookinStorage = JSON.parse(localStorage.getItem('orderBookId')) || [];
    this.IforderBookinStorage.forEach((elem)=>{
      this.orderBook.push(elem);
    });


    this.service.getAllBooks()
      .subscribe((books:Book[])=>{
        this.allBooks = books;
      });
  };

  addBook(id){
    this.orderBook.push(id);
    localStorage.setItem('orderBookId', JSON.stringify(this.orderBook));
  };

  test(){
    this.service.test()
      .subscribe((data)=>{
        console.log(data)
      })
  }



}
