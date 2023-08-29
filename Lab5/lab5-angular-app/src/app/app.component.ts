import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'lab5-angular-app';
  parentColorProperty: string = '';

  constructor() { }

  ngOnInit(): void {
      
  }

  receiveData($event: any){
    this.parentColorProperty = $event;
  }
}
