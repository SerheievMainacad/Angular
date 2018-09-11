import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit,
  AfterContentChecked,
  OnDestroy
} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'new-component',
  templateUrl: 'new-component.html',
  styleUrls: ['new-component.css']
})
export class newComponent {
  counterFromChild: number;

  catchCounter(value) {
    this.counterFromChild = value;
    console.log(`Counter from child component ${value}`);
  }
  // lifecycle hooks
  ngOnChanges() {
    console.log('OnChanges');
    //if(this.counter){}else{this.counter = 'connection issue'}
  }
  ngOnInit() {
    console.log('OnInit');
    // http.get()
  }
  ngDoCheck() {
    console.log('DoCheck');
  }
  ngAfterContentInit() {
    console.log('AfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('AfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('AfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('AfterViewChecked');
  }
  ngOnDestroy() {
    console.log('OnDestroy');
    //http.post-
  }
}
