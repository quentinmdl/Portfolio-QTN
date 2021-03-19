import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import emailjs, { EmailJSResponseStatus, init } from 'emailjs-com';
init("user_NUduIc14kwLKSkO6SKmB5");

import * as $ from 'jquery';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  
  // public sendEmail(e: Event) {
  //   e.preventDefault();
  //   emailjs.sendForm('service_vuc0tzy', 'template_upy9tho', e.target as HTMLFormElement, 'user_NUduIc14kwLKSkO6SKmB5')
  //     .then((result: EmailJSResponseStatus) => {
  //       // $("#send-message").css('display','block')
  //       alert("Email envoyé avec succès !")
  //       $("#send-message").css('display','none');
  //     }, (error) => {
  //       alert("Erreur dans l'envoi de l'email")
  //     });
  // }

    public sendEmail() {
      var tempParams = {
        name: $("#form_name").val(),
        email: $("#form_email").val(),
        subject: $("#form_subject").val(),
        message: $("#form_message").val(),
      };
      $("#send-message").css('display','block');
      emailjs.send('service_vuc0tzy', 'template_upy9tho', tempParams)
      .then(function(res) {
        alert("Email envoyé avec succès !");
        $("#send-message").css('display','none');
        window.location.reload()
      })
    }

  constructor( ) { }

  ngOnInit(): void { 

    function doCheck() {
      var allFilled = true;
      $('.form-input').each(function() {
        if ($(this).val() == '') {
          allFilled = false;
        }
      });
      
      $('input[type=submit]').prop('disabled', !allFilled);
      if (allFilled) {
        $('input[type=submit]').removeAttr('disabled');
      }
    }

    $(document).ready(function() {
      doCheck();
      $('.form-input').keyup(doCheck);
    });
      
  }
  
 



}
