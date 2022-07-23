import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-responsive-design',
  templateUrl: './responsive-design.component.html',
  styleUrls: ['./responsive-design.component.css']
})
export class ResponsiveDesignComponent implements OnInit {

  constructor() { }

  title = "Angular Pipes"
  today = Date()
  name = "abhishek"
  email = "abhishekmohan7171@yahoo.com"
  fullName = "Abhishek Mohan"

  activeStatus:any = "now.";
  error:any

  capString(item:String){
    return item.toUpperCase()
  }

  ngOnInit(): void {
	new Observable((observer)=>{
		setTimeout(()=>{
			observer.next('1 min ago.')
		},2000);
		setTimeout(()=>{
			observer.next('5 mins ago.')
		},4000);
		setTimeout(()=>{
			observer.next('10 mins ago.')
      observer.error('Oops! Something went wrong!')
		},8000);
    setTimeout(()=>{
      observer.next('15 mins ago.')
    },12000)
	}).subscribe((res: any)=>{
    this.activeStatus = res
  }, (err)=>{
    this.error = err;
  })
  }

}
