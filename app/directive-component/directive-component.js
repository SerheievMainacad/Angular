"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var directiveComponent = /** @class */ (function () {
    function directiveComponent() {
        this.persons = [{ name: 'Angular', age: 2 }, { name: 'Angular JS', age: 4 }, { name: 'React', age: 4 }];
        this.num = 0;
        this.showDiv = true;
        this.classes = {
            error: true,
            highlighted: false,
            uppercase: true
        };
        this.styles = {
            'background-color': 'red',
            width: '200px',
            height: '200px'
        };
    }
    directiveComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'directive-component',
            templateUrl: 'directive-component.html',
            styleUrls: ['directive-component.css']
        })
    ], directiveComponent);
    return directiveComponent;
}());
exports.directiveComponent = directiveComponent;
//# sourceMappingURL=directive-component.js.map