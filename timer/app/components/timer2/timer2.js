"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var timer2 = (function () {
    function timer2() {
    }
    timer2.prototype.onCountdownCompleted = function () {
        alert('¡Tiempo Acabado!');
    };
    return timer2;
}());
timer2 = __decorate([
    core_1.Component({
        selector: "timer2",
        templateUrl: "./app/components/timer2/timer2.html"
    })
], timer2);
exports.timer2 = timer2;
