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
var countdown_1 = require("../counting/countdown");
var timer2 = (function () {
    function timer2() {
        this.segundos = 25;
    }
    timer2.prototype.onCountProgress = function () {
        console.log(this.counter.seconds);
    };
    timer2.prototype.onCountdownCompleted = function () {
        alert('¡Tiempo Acabado!');
    };
    return timer2;
}());
__decorate([
    core_1.ViewChild('counter'),
    __metadata("design:type", countdown_1.CountDownComponent)
], timer2.prototype, "counter", void 0);
timer2 = __decorate([
    core_1.Component({
        selector: "timer2",
        templateUrl: "./app/components/timer2/timer2.html"
    }),
    __metadata("design:paramtypes", [])
], timer2);
exports.timer2 = timer2;
