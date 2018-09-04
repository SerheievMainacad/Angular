"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firstComponent = /** @class */ (function () {
    function firstComponent() {
        this.exportProperty = 'SomeString';
        this.firstComponentHeader = 'First Component';
    }
    firstComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'first-component',
            // template: '<h1>asdas</h1>',
            templateUrl: 'first-component.html',
            styleUrls: ['first-component.css']
        })
    ], firstComponent);
    return firstComponent;
}());
exports.firstComponent = firstComponent;
//# sourceMappingURL=first-component.js.map