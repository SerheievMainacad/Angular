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
var newComponentChild1 = /** @class */ (function () {
    function newComponentChild1() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], newComponentChild1.prototype, "componentTitle", void 0);
    newComponentChild1 = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'new-component-child1',
            templateUrl: 'new-component-child1.html',
            styleUrls: ['new-component-child1.css']
        })
    ], newComponentChild1);
    return newComponentChild1;
}());
exports.newComponentChild1 = newComponentChild1;
//# sourceMappingURL=new-component-child1.js.map