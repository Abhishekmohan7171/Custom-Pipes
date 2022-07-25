import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-responsive-design',
  templateUrl: './responsive-design.component.html',
  styleUrls: ['./responsive-design.component.css']
})
export class ResponsiveDesignComponent implements OnInit {
  data:any;
  error:any
  constructor() { }

  title = "Angular Pipes"
  today = Date()
  name = "abhishek"
  email = "abhishekmohan7171@yahoo.com"
  fullName = "Abhishek Mohan"

  activeStatus:any = "now";
  activeStatus1:any = "now";

  capString(item:String){
    return item.toUpperCase()
  }

  ngOnInit(): void {
	this.data = new Observable((observer)=>{
		setTimeout(()=>{
			observer.next('1 min ago.')
		},2000);
		setTimeout(()=>{
			observer.next('5 mins ago.')
		},4000);
		setTimeout(()=>{
			observer.next('10 mins ago.')
      //observer.complete(); //tried complete method
      //observer.error("Oops, Somethings Wrong!")
		},7000);
    setTimeout(()=>{
      observer.next('15 mins ago.')
    },10000)
	})

  //multiple susbscriptions
  this.data.subscribe((res:any)=>{
    this.activeStatus = res;
  })

  this.data.subscribe((res:any)=>{
    this.activeStatus1 = res;
  })
  }

}
