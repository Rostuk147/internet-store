import { Component, OnInit } from '@angular/core';
import {searchService} from "../service/search.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.sass']
})
export class CategoryComponent implements OnInit {

  key: string;
  selector = document.getElementsByClassName('category-item ');

  constructor(
    private searchService: searchService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  sendCategoryKey(): void {
    this.searchService.sendCategoryKey(`${this.key}`);
  }

  get(e){
    this.key = e.path[0].getAttribute('data-key');
    this.removeClass();
    e.path[0].classList.add('active');
    this.sendCategoryKey();
    this.router.navigate(['/books/catalog']);
  }


    removeClass(){
      for(let i = 0; i<this.selector.length; i++){
        this.selector[i].children[0].classList.remove('active');
      }
    }

}
