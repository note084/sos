import { Component, OnInit } from '@angular/core';
import { trigger, animate, style, transition, state } from '@angular/animations'

@Component({
  selector: 'app-capabilities',
  templateUrl: './capabilities.component.html',
  styleUrls: ['./capabilities.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({
          transform: 'scale(0)',
          opacity:0}),
        animate(500, style({
          transform: 'scale(1)',
          opacity:1}))
      ])
    ]),
    trigger('fadeIn1', [
      transition(':enter', [
        style({
          transform: 'scale(0)',
          opacity:0}),
        animate(1000, style({
          transform: 'scale(1)',
          opacity:1}))
      ])
    ]),
    trigger('slideRight', [
      transition(':enter', [
        style({transform: 'translateX(-50%)', opacity:0}),
        animate('500ms ease-in', style({transform: 'translateX(0%', opacity:1}))
      ])
    ]),
    trigger('slideLeft', [
      transition(':enter', [
        style({transform: 'translateX(50%)', opacity:0}),
        animate('500ms ease-in', style({transform: 'translateX(0%', opacity:1}))
      ])
    ])
  ]
})
export class CapabilitiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  state: string = 'small';
  animateMe(){
    this.state = (this.state === 'small' ? 'large' : 'small');
  }


}
