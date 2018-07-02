import { Component, OnInit } from '@angular/core';
import {searchService} from "../service/search.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  constructor(
    private searchService: searchService,
    private router: Router
  ) { }

  searchStr: string = '';

  ngOnInit() {

  }

  sendKey(): void {
    this.searchService.sendKey(`${this.searchStr}`);
  }


  onKey(){
    this.sendKey();
    this.router.navigate(['/books/catalog'])
  }

}
