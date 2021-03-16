import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    /* ADD FIXED CLASS FUNCTION */

    (function ($) {
      $(window).scroll(function() { 
        let height = $('.header').height();
        if($($).scrollTop() > height){
          $('.nav').addClass('fixed');
        }else{
          $('.nav').removeClass('fixed');
        }
      });
    })(jQuery);

    
    /* ADD ACTIVE CLASS FUNCTION */

    $('.nav-links a').on('click', function () {
        $('.active').removeClass('active');
        $(this).addClass('active');
    });

  }

}
