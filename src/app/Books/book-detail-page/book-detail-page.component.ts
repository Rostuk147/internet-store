import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BookService} from "../../shared/service/service";
import {Book} from "../../shared/model/books.model";

@Component({
  selector: 'app-book-detail-page',
  templateUrl: './book-detail-page.component.html',
  styleUrls: ['./book-detail-page.component.sass']
})
export class BookDetailPageComponent implements OnInit {


  id: number;
  book: Book[];

  constructor(
    private route: ActivatedRoute,
    private service: BookService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.service.getSingleBook(this.id)
      .subscribe((book: Book[])=>{
        this.book = book;
      })
  }

}
