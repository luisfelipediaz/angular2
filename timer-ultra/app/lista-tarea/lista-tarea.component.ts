import { Component } from "@angular/core";
import { Task } from "../interfaces/Task";
import { TaskService } from "../servicios/TaskService";

@Component({
	moduleId: module.id,
	selector: "lista-tarea",
	templateUrl: "lista-tarea.html",
	styleUrls: ["lista-tarea.css"]
})
export class TaskCompoment{
	today: Date;
	tasks: Task[];

	constructor(){
		const taskService: TaskService = new TaskService();
		this.tasks = taskService.taskStore;
		this.today = new Date();
	}
}

var module = {
	id: "lista-tarea"
}