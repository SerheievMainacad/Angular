"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var first_component_1 = require("./first-component/first-component");
var second_component_1 = require("./second-component/second-component");
var new_component_1 = require("./new-component/new-component");
var new_component_child1_1 = require("./new-component/new-component-child-1/new-component-child1");
var new_component_child2_1 = require("./new-component/new-component-child-2/new-component-child2");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot([
                    { path: 'first', component: first_component_1.firstComponent },
                    { path: 'second', component: second_component_1.secondComponent },
                    { path: 'newchild', component: new_component_1.newComponent },
                    { path: '', redirectTo: 'first', pathMatch: 'full' }
                ])
            ],
            declarations: [app_component_1.AppComponent, first_component_1.firstComponent, second_component_1.secondComponent, new_component_1.newComponent, new_component_child1_1.newComponentChild1, new_component_child2_1.newComponentChild2],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map