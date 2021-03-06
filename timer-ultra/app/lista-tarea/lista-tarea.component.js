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
var TaskService_1 = require("../servicios/TaskService");
var TaskCompoment = (function () {
    function TaskCompoment() {
        this.queuedHeaderMapping = {
            '=0': 'Sin tareas',
            '=1': 'Una tarea',
            'other': '# tareas'
        };
        var taskService = new TaskService_1.TaskService();
        this.tasks = taskService.taskStore;
        this.today = new Date();
        this.actualizarTareasEnCola();
    }
    TaskCompoment.prototype.toggleTask = function (task) {
        task.queued = !task.queued;
        this.actualizarTareasEnCola();
    };
    TaskCompoment.prototype.actualizarTareasEnCola = function () {
        this.queuedTareas = this.tasks
            .filter(function (task) { return task.queued; })
            .reduce(function (tareas, queuedTask) {
            return tareas + queuedTask.tareasRequeridas;
        }, 0);
    };
    return TaskCompoment;
}());
TaskCompoment = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "lista-tarea",
        templateUrl: "lista-tarea.html",
        styleUrls: ["lista-tarea.css"]
    }),
    __metadata("design:paramtypes", [])
], TaskCompoment);
exports.TaskCompoment = TaskCompoment;
var module = {
    id: "lista-tarea"
};
