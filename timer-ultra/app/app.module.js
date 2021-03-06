"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*Forma 1*/
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var lista_tarea_component_1 = require("./lista-tarea/lista-tarea.component");
var formateohoras_pipe_1 = require("./pipes/formateohoras.pipe");
var queuedOnlyPipe_1 = require("./pipes/queuedOnlyPipe");
var tarea_task_icons_component_1 = require("./tarea-task-icons/tarea-task-icons.component");
//Para la forma uno este import no va
var TaskTooltipDirective_1 = require("./directives/TaskTooltipDirective");
//Importante poner antes las declaraciones de las directivas es muuuuuy importante
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        /*
        para la forma uno los declarations deben ser
        declarations: [ AppComponent, TaskCompoment, FormattedTimePipe, TaskIconsComponent, QueuedOnlyPipe ],
        */
        declarations: [TaskTooltipDirective_1.TaskTooltipDirective, app_component_1.AppComponent, lista_tarea_component_1.TaskCompoment, formateohoras_pipe_1.FormattedTimePipe, tarea_task_icons_component_1.TaskIconsComponent, queuedOnlyPipe_1.QueuedOnlyPipe],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
