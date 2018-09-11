import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'binding-component',
  templateUrl: 'binding-component.html',
  styleUrls: ['binding-component.css']
})
export class bindingComponent {
  name: string = 'Binding sample';
  isRendered: boolean = true;
  url: string = 'http://google.com';
  color: string = 'lightblue';
  isBorder: boolean = true;
  isBg: boolean = true;
  classes = {
    border: true,
    bg: true
  };

  checkRender() {
    if (this.isRendered) {
      return `${this.name} - ${this.isRendered}`;
    }
  }
  getEventInfo(event) {
    for (let prop in event) {
      console.log(`Property ${prop} = ${event[prop]}`);
    }
    console.log(`Specific prop ${event.screenX}`);
  }
}
