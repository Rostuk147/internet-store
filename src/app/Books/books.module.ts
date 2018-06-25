import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [BooksComponent],
  exports: []
})
export class BooksModule { }
