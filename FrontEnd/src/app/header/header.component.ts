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


    /* ADD BLOCK/NONE CSS STYLE FUNCTION */

    (function ($) {
      $(window).scroll(function() {    
        var scroll = $(window).scrollTop();    
        if (scroll > 500) {
            $(".scroll-top").css("display", "block");
        } else {
          $(".scroll-top").css("display", "none");
        }
      })
    })(jQuery);

    
    /* ADD ACTIVE CLASS FUNCTION */

    $('.nav-links a').on('click', function () {
        $('.active').removeClass('active');
        $(this).addClass('active');
    });

  }

}
