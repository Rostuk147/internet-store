import { Component, OnInit } from '@angular/core';
import {BookService} from "../../../shared/service/book.service";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {


  orderBookId = [];
  orderBook = [];
  constructor(
    private service: BookService
  ) {}

  ngOnInit() {
    this.orderBookId = JSON.parse(localStorage.getItem('orderBookId')) || [];

    this.orderBookId.forEach((elementId)=>{
      this.service.getSingleBook(elementId)
        .subscribe((book)=>{
          this.orderBook.push(book);
        })
    });
  };


  removeBook(id){
   this.orderBookId = this.orderBookId.filter(c => c !== id);
    localStorage.setItem('orderBookId', JSON.stringify(this.orderBookId));

    this.orderBook = this.orderBook.filter(c => c.id !== id);
  }


}
