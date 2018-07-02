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
    // return this.get('books?category=js&_sort=price&_order=asc')
    return this.get('books')
  }

  getSingleBook(id){
    return this.get(`books?id=${id}`)
      .map((book) => book[0] ? book[0] : undefined);
  }

  search(key){
    return this.get(`books?name_like=^${key}`);
  }

}
