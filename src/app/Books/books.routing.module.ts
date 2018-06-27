import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BooksComponent} from "./books.component";
import {BookDetailPageComponent} from "./book-detail-page/book-detail-page.component";
import {BooksCatalogComponent} from "./books-catalog/books-catalog.component";
import {CartComponent} from "./Cart/cart/cart.component";



const routes: Routes = [
  {path: 'books', component: BooksComponent,  children: [
      {path: 'catalog', component: BooksCatalogComponent},
      {path: 'catalog/book/:id', component: BookDetailPageComponent},
    ]},
  {path: 'cart', component: CartComponent}

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
