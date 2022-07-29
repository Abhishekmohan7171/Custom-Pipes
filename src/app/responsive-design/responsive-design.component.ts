import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-responsive-design',
  templateUrl: './responsive-design.component.html',
  styleUrls: ['./responsive-design.component.css'],
})
export class ResponsiveDesignComponent implements OnInit {
  data: any;
  error: any;
  constructor(private db: AngularFireDatabase) {}

  title = 'Angular Pipes';
  today = Date();
  name = 'abhishek';
  email = 'abhishekmohan7171@yahoo.com';
  fullName = 'Abhishek Mohan';

  activeStatus: any = 'now';
  activeStatus1: any = 'now';

  users: Observable<any> | undefined;
  usersRef: AngularFireList<any> | undefined;

  /*
  capString(item: String) {
    return item.toUpperCase();
  }
  */

  // Of Operator
  // studentList = ["Mark","Lisa","Ann"];
  // students: Observable<String[]> = of(this.studentList)
  // nameOf: Observable<String> = of('Abhishek')

  // student = {
  //   id:1,
  //   name:"Abhi",
  //   age:22
  // }

  // studentobj$: Observable<any> = of(this.student)

  ngOnInit(): void {
    //OBSERVABLE
    // this.data = new Observable((observer) => {
    //   setTimeout(() => {
    //     observer.next('1 min ago.');
    //   }, 2000);
    //   setTimeout(() => {
    //     observer.next('5 mins ago.');
    //   }, 4000);
    //   setTimeout(() => {
    //     observer.next('10 mins ago.');
    //     //observer.complete(); //tried complete method
    //     //observer.error("Oops, Somethings Wrong!")
    //   }, 7000);
    //   setTimeout(() => {
    //     observer.next('15 mins ago.');
    //   }, 10000);
    // });

    // //multiple susbscriptions
    // this.data.subscribe((res: any) => {
    //   this.activeStatus = res;
    // });

    // this.data.subscribe((res: any) => {
    //   this.activeStatus1 = res;
    // });

    // Subscribing of operators above
    // this.students.subscribe(data => {
    //   console.log(data)
    // })

    // this.nameOf.subscribe(data =>{
    //   console.log(data)
    // })

    // this.studentobj$.subscribe(data => {
    //   console.log(data)
    // })
	
	/*
    this.users = this.db.list('/login').snapshotChanges();
    console.log(this.users);
    */

	/*	
	this.usersRef = this.db.list('/login');
    this.users = this.usersRef.valueChanges();
    this.users.subscribe((res:any) => console.log(res));
    */

	this.usersRef = this.db.list('/login/-N1IPJx2vQcXqh42LDiC');
    this.users = this.usersRef.valueChanges();
    this.users.pipe(map((user:any)=>{
		console.log(user)	
	})).subscribe()
   
  }
}
