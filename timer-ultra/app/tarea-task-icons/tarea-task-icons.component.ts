import { Component, OnInit, Input } from "@angular/core";
import { Task } from "../interfaces/Task";

@Component({
	selector: "tarea-task-icons",
	template: `<img *ngFor="let icon of icons"
				src="../assets/img/timer.png" width="{{size}}"/>`
})
export class TaskIconsComponent implements OnInit{
	@Input() task: Task
	@Input() size: number;
	icons: Object[] = [];

	ngOnInit(){
		this.icons.length = this.task.tareasRequeridas;
		this.icons.fill({ name: this.task.name });
	}
}