import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  constructor() { }

  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[a-zA-Z]+$')
    ]),
    email: new FormControl('',[
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.minLength(6),
      Validators.maxLength(8),
      Validators.required
    ])
  })

  get username(){
    return this.loginForm.get('username')
  }

  get email() {
    return this.loginForm.get('email')
  }

  get password(){
    return this.loginForm.get('password')
  }
  
  login(){
    console.warn(this.loginForm.value)
    //alert("Success.")
  }

  ngOnInit(): void {
  }

}
