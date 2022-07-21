import { Component, OnInit } from '@angular/core';

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

  capString(item:String){
    return item.toUpperCase()
  }

  ngOnInit(): void {
  }

}
