import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import {Api} from "./api.service";




@Injectable()

export class BookService extends Api{
  constructor(public http: HttpClient){
    super(http);
  }

  getAllBooks() {
    return this.get('books?category=js&_sort=price&_order=asc')
  }



}
