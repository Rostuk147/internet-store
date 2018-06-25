import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {AppRoutingModule} from "./app.routing.module";
import {BooksModule} from "./Books/books.module";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BooksModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
