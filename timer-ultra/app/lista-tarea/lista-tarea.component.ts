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
	queuedTareas: number;

	queuedHeaderMapping: any = {
		'=0': 'Sin tareas',
		'=1': 'Una tarea',
		'other': '# tareas'
	};

	constructor(){
		const taskService: TaskService = new TaskService();
		this.tasks = taskService.taskStore;
		this.today = new Date();
		this.actualizarTareasEnCola();
	}

	toggleTask(task: Task): void{
		task.queued = !task.queued;
		this.actualizarTareasEnCola();
	}

	private actualizarTareasEnCola(): void{
		this.queuedTareas = this.tasks
					.filter((task: Task) => task.queued)
					.reduce((tareas: number, queuedTask: Task) => {
						return tareas + queuedTask.tareasRequeridas
					}, 0);
	}
}

var module = {
	id: "lista-tarea"
}