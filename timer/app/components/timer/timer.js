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
var AppTimer = (function () {
    function AppTimer() {
        var _this = this;
        this.resetTimer();
        setInterval(function () { return _this.tick(); }, 1000);
    }
    AppTimer.prototype.resetTimer = function () {
        this.minutos = 59;
        this.segundos = 59;
        this.buttonLabel = "Iniciar";
        this.togglePause();
    };
    AppTimer.prototype.tick = function () {
        if (!this.isPaused) {
            this.buttonLabel = "Pausar";
            if (--this.segundos < 0) {
                this.segundos = 59;
                if (--this.minutos < 0) {
                    this.resetTimer();
                }
            }
        }
    };
    AppTimer.prototype.togglePause = function () {
        this.isPaused = !this.isPaused;
        if (this.segundos < 59 || this.minutos < 59) {
            this.buttonLabel = this.isPaused ? "Reanudar" : "Pausar";
        }
    };
    return AppTimer;
}());
AppTimer = __decorate([
    core_1.Component({
        selector: "app-timer",
        templateUrl: "./app/components/timer/timer.html"
    }),
    __metadata("design:paramtypes", [])
], AppTimer);
exports.AppTimer = AppTimer;
