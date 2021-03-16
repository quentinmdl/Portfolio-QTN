import { Component, OnInit } from '@angular/core';
// import { FormControl,FormGroup,FormBuilder,Validator } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // myform = new FormGroup({
  //   name: new FormControl(),
  //   email: new FormControl(),
  //   object: new FormControl(),
  //   message: new FormControl()
  // });

  // SubmitForm() {
  //     console.log(this.myform.value);
  // }


  constructor() { }

  ngOnInit(): void {
  }

}
