import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = [  
    { img: "../assets/images/DSC_4242.png" },
    { img: "../assets/images/DSC_4272.png" },
    { img: "../assets/images/DSC_4298.png" },
    { img: "../assets/images/DSC_4245.png" },
    { img: "../assets/images/DSC_4328.png" },
 
  ];
  
  slideConfig = {  
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "autoplay": true,
    "autoplaySpeed": 2000,
    "dots": false,
    "infinite": true
  };

}