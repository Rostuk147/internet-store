import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {BookService} from "../../shared/service/book.service";
import {Book} from "../../shared/model/books.model";
import {searchService} from "../../shared/service/search.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-books-catalog',
  templateUrl: './books-catalog.component.html',
  styleUrls: ['./books-catalog.component.sass']
})
export class BooksCatalogComponent implements OnInit,  OnDestroy{

  allBooks: Book[] = [];
  orderBook = [];
  ifOrderBookInStorage = [];
  message: any;
  subscription: Subscription;
  notFound: boolean = false;

  constructor(
    private service: BookService,
    private searchService: searchService
  ) {
    this.subscription = this.searchService.getKey().subscribe((message) => {
      this.message = message;
      this.search();
    });
  }


  ngOnInit() {

    this.ifOrderBookInStorage = JSON.parse(localStorage.getItem('orderBookId')) || [];
    this.ifOrderBookInStorage.forEach((elem)=>{
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


  search(){
    this.service.search(this.message.text)
      .subscribe((data:Book[])=>{
        this.allBooks = data;
        if(data.length <=0){
          this.notFound = true;
        } else {
          this.notFound = false;
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
