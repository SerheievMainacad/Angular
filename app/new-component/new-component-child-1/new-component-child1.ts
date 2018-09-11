import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'new-component-child1',
  templateUrl: 'new-component-child1.html',
  styleUrls: ['new-component-child1.css']
})
export class newComponentChild1 {
  counter: number = 0;

  @Input()
  componentTitle: string;

  @Output()
  plus: EventEmitter<number> = new EventEmitter();

  plusStart() {
    this.counter++;
    this.plus.emit(this.counter);
  }
  ngOnChanges() {
    console.log('OnChanges - child component');
  }

  ngOnInit() {
    console.log('OnInit  - child component');
  }
  ngDoCheck() {
    console.log('DoCheck  - child component');
  }
  ngAfterContentInit() {
    console.log('AfterContentInit  - child component');
  }
  ngAfterContentChecked() {
    console.log('AfterContentChecked  - child component');
  }
  ngAfterViewInit() {
    console.log('AfterViewInit  - child component');
  }
  ngAfterViewChecked() {
    console.log('AfterViewChecked  - child component');
  }
  ngOnDestroy() {
    console.log('OnDestroy  - child component');
  }
}
