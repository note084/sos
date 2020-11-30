import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  collapse: boolean = true;
  constructor() { }

  ngOnInit(): void {

    $(document).ready(function(){
      $('.hb-button').on('click', function(){
          $('nav ul').toggleClass('show');
      });
  });

  $(function() {
    $(window).scroll(function () {
       if ($(this).scrollTop() > 50) {
          $('nav').addClass('changeColor')
       }
       else {
          $('nav').removeClass('changeColor')
       }
    });
 });

  
  }
}
