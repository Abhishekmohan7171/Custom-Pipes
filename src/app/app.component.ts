import { getLocaleDateFormat } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'beats-bydre';
  name = "";
  userData : any

  // data = {
  //   name:"Abhishek",
  //   age:22
  // }

  // getData(data:NgForm){
  //   console.warn(data)
  //   this.userData = data;
  // }

  parentComp(data: any) {
    console.warn(data);
    this.name = data.name;
  }
}

