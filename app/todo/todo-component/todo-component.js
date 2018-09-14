"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var storage_service_1 = require("../../storage.service");
var http_1 = require("@angular/http");
var todoComponent = /** @class */ (function () {
    function todoComponent(storageService, http) {
        this.storageService = storageService;
        this.http = http;
        this.key = 'data';
        this.url = 'http://localhost:2403/tasks/';
        this.newTaskName = '';
    }
    todoComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Observable object
        // let Observable = this.http.get(this.url)
        // Observable.subscribe(success, error) // ()=>{}
        this.http.get(this.url).subscribe(function (response) {
            _this.tasks = response.json();
        }, function (error) { return console.log(error); });
        //save data in Local Storage
        // if (this.storageService.getData(this.key)) {
        //   this.tasks = this.storageService.getData(this.key);
        // } else {
        //   this.tasks = [
        //     { name: 'HTML5', isCompleted: false, editable: false },
        //     { name: 'CSS3', isCompleted: false, editable: false }
        //   ];
        // }
    };
    todoComponent.prototype.ngOnDestroy = function () {
        this.storageService.setData(this.key, this.tasks);
    };
    todoComponent.prototype.add = function () {
        var _this = this;
        var newTask = { name: this.newTaskName, isCompleted: false, editable: false };
        this.http.post(this.url, newTask).subscribe(function (response) {
            //this.tasks.push({ name: this.newTaskName, isCompleted: false, editable: false })
            _this.tasks.push(response.json());
            _this.newTaskName = '';
        }, function (error) {
            console.log(error);
        });
    };
    todoComponent.prototype.edit = function (task) {
        task.editable = true;
    };
    todoComponent.prototype.save = function (task, i) {
        var _this = this;
        task.editable = false;
        this.http.put("" + this.url + task.id, task).subscribe(function (response) {
            _this.tasks[i] = response.json();
        }, function (error) {
            console.log(error);
        });
    };
    todoComponent.prototype.delete = function (task, i) {
        var _this = this;
        this.http.delete("" + this.url + task.id).subscribe(function (respose) {
            _this.tasks.splice(i, 1);
        });
    };
    todoComponent.prototype.getClass = function (classes) {
        console.log(classes);
    };
    todoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'todo-component',
            templateUrl: 'todo-component.html',
            styleUrls: ['todo-component.css']
        }),
        __metadata("design:paramtypes", [storage_service_1.storageService, http_1.Http])
    ], todoComponent);
    return todoComponent;
}());
exports.todoComponent = todoComponent;
//# sourceMappingURL=todo-component.js.map