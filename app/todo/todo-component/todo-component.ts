import { Component, OnInit, OnDestroy } from '@angular/core';
import { storageService } from '../../storage.service';

@Component({
  moduleId: module.id,
  selector: 'todo-component',
  templateUrl: 'todo-component.html',
  styleUrls: ['todo-component.css']
})
export class todoComponent {
  key: string = 'data';
  tasks = [];
  newTaskName: string = '';

  constructor(private storageService: storageService) {}
  ngOnInit() {
    if (this.storageService.getData(this.key)) {
      this.tasks = this.storageService.getData(this.key);
    } else {
      this.tasks = [
        { name: 'HTML5', isCompleted: false, editable: false },
        { name: 'CSS3', isCompleted: false, editable: false }
      ];
    }
  }

  ngOnDestroy() {
    this.storageService.setData(this.key, this.tasks);
  }
  add() {
    this.tasks.push({ name: this.newTaskName, isCompleted: false, editable: false });
    this.newTaskName = '';
  }
  edit(task) {
    task.editable = true;
  }
  save(task) {}
}
