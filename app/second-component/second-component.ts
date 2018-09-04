import { Component, Input } from '@angular/core';

@Component({
  selector: 'second-component',
  // template: '<h1>asdas</h1>',
  templateUrl: 'app/second-component/second-component.html',
  styleUrls: ['app/second-component/second-component.css'],
  inputs: ['name']
})
export class secondComponent {
  @Input()
  header: string;
}
