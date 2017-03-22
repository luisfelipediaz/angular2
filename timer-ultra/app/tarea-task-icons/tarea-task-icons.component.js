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
var TaskIconsComponent = (function () {
    function TaskIconsComponent() {
        this.icons = [];
    }
    TaskIconsComponent.prototype.ngOnInit = function () {
        this.icons.length = this.task.tareasRequeridas;
        this.icons.fill({ name: this.task.name });
    };
    return TaskIconsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TaskIconsComponent.prototype, "task", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], TaskIconsComponent.prototype, "size", void 0);
TaskIconsComponent = __decorate([
    core_1.Component({
        selector: "tarea-task-icons",
        template: "<img *ngFor=\"let icon of icons\"\n\t\t\t\tsrc=\"../assets/img/timer.png\" width=\"{{size}}\"/>"
    })
], TaskIconsComponent);
exports.TaskIconsComponent = TaskIconsComponent;
