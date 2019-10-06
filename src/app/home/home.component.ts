import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  clickCounter: number = 0;
  name: string = '';

  constructor() { }

  ngOnInit() {
  }

  click(operation) {
    if(operation === 'add') {
      this.clickCounter += 1;
    } else {
      this.clickCounter -= 1;
    }
  }

  setClasses() {
    let myClasses = {
      active: this.clickCounter > 2,
      notactive: this.clickCounter <= 2
    };
    return myClasses;
  }

}
