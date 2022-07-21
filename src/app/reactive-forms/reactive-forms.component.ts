import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseServiceService } from '../firebase-service.service';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  isSignedIn = false;
  constructor(public firebaseService : FirebaseServiceService) { }
 
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
      Validators.maxLength(12 ),
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
        if(localStorage.getItem('user')!==null)
        this.isSignedIn = true
        else
        this.isSignedIn = false
      }
    
      async onSignup(email:string,password:string){
        await this.firebaseService.signup(email,password)
        if(this.firebaseService.isLoggedIn)
        this.isSignedIn = true
      }
    
      async onSignin(email:string,password:string){
        await this.firebaseService.signin(email,password)
        if(this.firebaseService.isLoggedIn)
        this.isSignedIn = true
      }
    
      handleLogout(){
        this.isSignedIn = false
      }
    

}
