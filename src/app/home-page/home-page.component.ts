import { Component, OnInit } from '@angular/core';
import { trigger, animate, style, transition } from '@angular/animations'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [
    trigger('slideRight', [
      transition(':enter', [
        style({transform: 'translateX(-50%)', opacity:0}),
        animate('1000ms ease-in', style({transform: 'translateX(0%', opacity:1}))
      ])
    ])
  ]
  
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = [  
    { img: "../assets/images/DSC_4490.png" },
    { img: "../assets/images/DSC_4512.png" },
    { img: "../assets/images/DSC_4614.png" },
    { img: "../assets/images/DSC_4569.png" },
    { img: "../assets/images/DSC_4660.png" },
 
  ];
  
  slideConfig = {  
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "autoplay": true,
    "autoplaySpeed": 3000,
    "dots": false,
    "infinite": true,
    pauseOnHover: false,
    pauseOnFocus: false,
    fade: true,
  };

  visible = true;



}
