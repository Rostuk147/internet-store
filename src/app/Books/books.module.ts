import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import {SharedModule} from "../shared/shared.module";
import {BooksRoutingModule} from "./books.routing.module";
import { BookDetailPageComponent } from './book-detail-page/book-detail-page.component';
import { BooksCatalogComponent } from './books-catalog/books-catalog.component';
import { CartComponent } from './Cart/cart/cart.component';
import { NouisliderModule } from 'ng2-nouislider';


@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule,
    SharedModule,
    NouisliderModule
  ],
  declarations: [
    BooksComponent,
    BookDetailPageComponent,
    BooksCatalogComponent,
    CartComponent
  ],
  exports: []
})
export class BooksModule { }
