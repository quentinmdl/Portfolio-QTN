import { transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    /* FILTER BUTTON */

    // shows and hides filtered items
    $(".filter-button").on('click',(function() {
      var value = $(this).attr('data-filter');
        $(".list-project").not('.'+value).hide();
        $('.list-project').filter('.'+value).show();
    }));

    // changes active class on filter buttons
    $('.filter-button').on('click', (function () {
      $(this).siblings().removeClass('active-project');
      $(this).addClass('active-project');
    }));

    
    /* POPUP PROJECT */

    // show content 1 in popup
    $("#stritt").on('click',(function() {
      $("#popup-smi").css("display","none");
      $("#popup-stritt").css("display","block");
  
    }));

       // show content 2 in popup
    $("#smi").on('click',(function() {
      $("#popup-stritt").css("display","none");
      $("#popup-smi").css("display","block");
    }));


  }

}
