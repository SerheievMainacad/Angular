"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var storageService = /** @class */ (function () {
    function storageService() {
    }
    Object.defineProperty(storageService.prototype, "storage", {
        get: function () {
            return window.localStorage;
        },
        enumerable: true,
        configurable: true
    });
    storageService.prototype.getData = function (key) {
        return JSON.parse(this.storage.getItem(key));
    };
    storageService.prototype.setData = function (key, data) {
        this.storage.setItem(key, JSON.stringify(data));
    };
    storageService = __decorate([
        core_1.Injectable()
    ], storageService);
    return storageService;
}());
exports.storageService = storageService;
//# sourceMappingURL=storage.service.js.map