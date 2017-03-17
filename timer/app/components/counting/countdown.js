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
var CountDownComponent = (function () {
    function CountDownComponent() {
        var _this = this;
        this.seconds = 25;
        this.complete = new core_1.EventEmitter();
        this.progress = new core_1.EventEmitter();
        this.intervalId = setInterval(function () { return _this.tick(); }, 1000);
    }
    CountDownComponent.prototype.tick = function () {
        if (--this.seconds < 1) {
            clearInterval(this.intervalId);
            this.complete.emit(null);
        }
        this.progress.emit(this.seconds);
    };
    return CountDownComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CountDownComponent.prototype, "seconds", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CountDownComponent.prototype, "complete", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CountDownComponent.prototype, "progress", void 0);
CountDownComponent = __decorate([
    core_1.Component({
        selector: "countdown",
        template: "<h1>Quedan: {{seconds}}</h1>",
        encapsulation: core_1.ViewEncapsulation.Emulated
    }),
    __metadata("design:paramtypes", [])
], CountDownComponent);
exports.CountDownComponent = CountDownComponent;
