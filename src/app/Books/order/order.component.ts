import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.sass']
})
export class OrderComponent implements OnInit {


  form: FormGroup;
  alert: boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'lastName': new FormControl(null, [Validators.required]),
      'phone': new FormControl(null, [Validators.required, Validators.maxLength(12)]),
      'email': new FormControl(null, [Validators.required, Validators.email])
    })
  }


  onSubmit(){
    this.alert = true;
    localStorage.setItem('orderBookId', JSON.stringify([]));
    window.setTimeout(()=>{
      this.router.navigate(['books/catalog']);
    }, 2000);
  };

}
