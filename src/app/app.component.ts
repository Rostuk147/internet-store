import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';


  // get(){
  //   return fetch(`http://localhost:3000/category?js`)
  //     .then(res => res.json())
  //     .catch(err => console.log(err))
  // }

}


