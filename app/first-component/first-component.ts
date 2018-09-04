import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'first-component',
  // template: '<h1>asdas</h1>',
  templateUrl: 'first-component.html',
  styleUrls: ['first-component.css']
})
export class firstComponent {
  exportProperty: string = 'SomeString';

  firstComponentHeader: string = 'First Component';
}
