import { Component, OnInit } from '@angular/core';
import { Slider } from 'ngx-slider';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass']
})
export class WelcomeComponent implements OnInit {

  public slider = new Slider();

  constructor() {
    this.slider.config.loop = true;
    this.slider.config.showPreview = false;
  }

  ngOnInit() {

    const slideItems = [
      { src: 'https://placeimg.com/600/600/any', title: 'Title 1' },
      { src: 'https://placeimg.com/600/600/nature', title: 'Title 2' },
      { src: 'https://placeimg.com/600/600/sepia', title: 'Title 3' },
      { src: 'https://placeimg.com/600/600/people', title: 'Title 4' },
      { src: 'https://placeimg.com/600/600/tech', title: 'Title 5' }
    ];

    this.slider.items = slideItems;

  }

}
