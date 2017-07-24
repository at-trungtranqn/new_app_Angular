import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {  
  title: string;
  count: number;
  body:string;
  constructor() {
    this.title = 'Hello world';
    this.count = 1;
  }

  showName() {
    this.body = 'My name is Trung';
    this.count++;
  }
}


