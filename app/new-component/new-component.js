"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var newComponent = /** @class */ (function () {
    function newComponent() {
    }
    newComponent.prototype.catchCounter = function (value) {
        this.counterFromChild = value;
        console.log("Counter from child component " + value);
    };
    // lifecycle hooks
    newComponent.prototype.ngOnChanges = function () {
        console.log('OnChanges');
        //if(this.counter){}else{this.counter = 'connection issue'}
    };
    newComponent.prototype.ngOnInit = function () {
        console.log('OnInit');
        // http.get()
    };
    newComponent.prototype.ngDoCheck = function () {
        console.log('DoCheck');
    };
    newComponent.prototype.ngAfterContentInit = function () {
        console.log('AfterContentInit');
    };
    newComponent.prototype.ngAfterContentChecked = function () {
        console.log('AfterContentChecked');
    };
    newComponent.prototype.ngAfterViewInit = function () {
        console.log('AfterViewInit');
    };
    newComponent.prototype.ngAfterViewChecked = function () {
        console.log('AfterViewChecked');
    };
    newComponent.prototype.ngOnDestroy = function () {
        console.log('OnDestroy');
        //http.post-
    };
    newComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'new-component',
            templateUrl: 'new-component.html',
            styleUrls: ['new-component.css']
        })
    ], newComponent);
    return newComponent;
}());
exports.newComponent = newComponent;
//# sourceMappingURL=new-component.js.map