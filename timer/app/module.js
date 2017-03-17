"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var timer_1 = require("./components/timer/timer");
var timer2_1 = require("./components/timer2/timer2");
var countdown_1 = require("./components/counting/countdown");
var App = (function () {
    function App() {
    }
    return App;
}());
App = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [timer_1.AppTimer, timer2_1.timer2, countdown_1.CountDownComponent],
        bootstrap: [timer_1.AppTimer, timer2_1.timer2]
    })
], App);
exports.App = App;
