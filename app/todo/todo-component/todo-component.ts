import { Component, OnInit, OnDestroy } from '@angular/core';
import { storageService } from '../../storage.service';
import { Http } from '@angular/http';
import { task } from '../task';
@Component({
  moduleId: module.id,
  selector: 'todo-component',
  templateUrl: 'todo-component.html',
  styleUrls: ['todo-component.css']
})
export class todoComponent {
  classList: string;
  key: string = 'data';
  url: string = 'http://localhost:2403/tasks/';
  tasks: task[];
  newTaskName: string = '';

  constructor(private storageService: storageService, private http: Http) {}
  ngOnInit() {
    //Observable object
    // let Observable = this.http.get(this.url)
    // Observable.subscribe(success, error) // ()=>{}
    this.http.get(this.url).subscribe(
      response => {
        this.tasks = response.json();
      },
      error => console.log(error)
    );
    //save data in Local Storage
    // if (this.storageService.getData(this.key)) {
    //   this.tasks = this.storageService.getData(this.key);
    // } else {
    //   this.tasks = [
    //     { name: 'HTML5', isCompleted: false, editable: false },
    //     { name: 'CSS3', isCompleted: false, editable: false }
    //   ];
    // }
  }

  ngOnDestroy() {
    this.storageService.setData(this.key, this.tasks);
  }
  add() {
    let newTask = { name: this.newTaskName, isCompleted: false, editable: false };
    this.http.post(this.url, newTask).subscribe(
      response => {
        //this.tasks.push({ name: this.newTaskName, isCompleted: false, editable: false })
        this.tasks.push(response.json());
        this.newTaskName = '';
      },
      error => {
        console.log(error);
      }
    );
  }
  edit(task) {
    task.editable = true;
  }
  save(task, i) {
    task.editable = false;
    this.http.put(`${this.url}${task.id}`, task).subscribe(
      response => {
        this.tasks[i] = response.json();
      },
      error => {
        console.log(error);
      }
    );
  }

  delete(task, i) {
    this.http.delete(`${this.url}${task.id}`).subscribe(respose => {
      this.tasks.splice(i, 1);
    });
  }

  getClass(classes) {
    console.log(classes);
  }
}
