"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var bindingComponent = /** @class */ (function () {
    function bindingComponent() {
        this.name = 'Binding sample';
        this.isRendered = true;
        this.url = 'http://google.com';
        this.color = 'lightblue';
        this.isBorder = true;
        this.isBg = true;
        this.classes = {
            border: true,
            bg: true
        };
    }
    bindingComponent.prototype.checkRender = function () {
        if (this.isRendered) {
            return this.name + " - " + this.isRendered;
        }
    };
    bindingComponent.prototype.getEventInfo = function (event) {
        for (var prop in event) {
            console.log("Property " + prop + " = " + event[prop]);
        }
        console.log("Specific prop " + event.screenX);
    };
    bindingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'binding-component',
            templateUrl: 'binding-component.html',
            styleUrls: ['binding-component.css']
        })
    ], bindingComponent);
    return bindingComponent;
}());
exports.bindingComponent = bindingComponent;
//# sourceMappingURL=binding-component.js.map