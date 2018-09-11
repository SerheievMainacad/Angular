import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'new-component-child2',
  templateUrl: 'new-component-child2.html',
  styleUrls: ['new-component-child2.css']
})
export class newComponentChild2 {
  @Input()
  componentTitle: string;

  @Input()
  counter: number;
}
