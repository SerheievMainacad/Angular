import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'directive-component',
  templateUrl: 'directive-component.html',
  styleUrls: ['directive-component.css']
})
export class directiveComponent {
  persons = [{ name: 'Angular', age: 2 }, { name: 'Angular JS', age: 4 }, { name: 'React', age: 4 }];
  num: number = 0;
  showDiv: boolean = true;

  classes = {
    error: true,
    highlighted: false,
    uppercase: true
  };

  styles = {
    'background-color': 'red',
    width: '200px',
    height: '200px'
  };
}
