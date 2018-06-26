import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

import { SliderModule } from 'ngx-slider';
import { WelcomeComponent } from '../Home/welcome/welcome.component';
import { HomeComponent } from '../Home/home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CategoryComponent } from './category/category.component';
import {BookService} from "./service/service";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    SliderModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    HomeComponent,
    NotFoundComponent,
    CategoryComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    NotFoundComponent,
    CategoryComponent,
    SliderModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    BookService
  ]
})
export class SharedModule { }
