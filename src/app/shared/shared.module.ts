import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

import { SliderModule } from 'ngx-slider';
import { WelcomeComponent } from '../Home/welcome/welcome.component';
import { HomeComponent } from '../Home/home/home.component';
import {RouterModule} from "@angular/router";
import { NotFoundComponent } from './not-found/not-found.component';
import { CategoryComponent } from './category/category.component';



@NgModule({
  imports: [
    CommonModule,
    SliderModule,
    RouterModule
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
    RouterModule
  ]
})
export class SharedModule { }
