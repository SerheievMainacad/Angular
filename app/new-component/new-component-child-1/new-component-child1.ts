import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'new-component-child1',
  templateUrl: 'new-component-child1.html',
  styleUrls: ['new-component-child1.css']
})
export class newComponentChild1 {
  @Input()
  componentTitle: string;
}
