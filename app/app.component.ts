import { Component, Input, Output } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-component',
  templateUrl: 'app-component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  appName: string = 'My first app';
  SlideNumber: number = 0;
  hello() {
    alert('hello');
  }
  handleSwitch(value) {
    this.SlideNumber = value;
  }
  goods: object[] = [
    { name: 'laptop', price: 2000 },
    { name: 'phone', price: 4000 },
    { name: 'kettle', price: 5000 },
    { name: 'ball', price: 1000 },
    { name: 'rocket', price: 4000 }
  ];
}
