import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() parentComponent:EventEmitter <any>= new EventEmitter
  constructor() { }

  ngOnInit(): void {
  }

  getData(){
    let data = {
      name:"Abhishek",
      age:22
    }
    this.parentComponent.emit(data)
  }

}
