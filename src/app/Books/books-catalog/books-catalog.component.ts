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
  categoryKey: any;
  subscription: Subscription;
  subscriptionCategory: Subscription;
  notFound: boolean = false;
  sliderStartValue: number = 0;
  sliderEndValue: number = 2000;
  someRange= [ 1, 2000 ];


  constructor(
    private service: BookService,
    private searchService: searchService
  ) {
    this.subscription = this.searchService.getKey().subscribe((message) => {
      this.message = message;
      this.search();
    });

    this.subscriptionCategory = this.searchService.getCategoryKey().subscribe((message) => {
      this.categoryKey = message;
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


  onRangeChange(e){
    this.sliderStartValue = e[0];
    this.sliderEndValue = e[1];

    let startVal = e[0];
    let endVal = e[1];

    this.service.getRange(startVal, endVal).
    subscribe((books: Book[])=>{
      if(books.length <= 0){
        this.notFound = true;
      } else {
        this.allBooks = books;
        this.notFound = false;
      }
    });
  };



}
