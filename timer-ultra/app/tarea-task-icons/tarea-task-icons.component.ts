/*Forma 2*/

/*Forma 1*/
import { Component, OnInit, Input, HostListener } from "@angular/core";
import { Task } from "../interfaces/Task";

@Component({
	selector: "tarea-task-icons",
	template: `<img *ngFor="let icon of icons"
	src="../assets/img/timer.png" width="{{size}}"/>`
})
export class TaskIconsComponent implements OnInit{
	private defaultTooltipText : string;
	icons: Object[] = [];
	@Input() task: Task
	@Input() size: number;
	/*@Input() taskTooltip: any;

	@HostListener('mouseover')
	onMouseOver(){
		if (!this.defaultTooltipText && this.taskTooltip) {
			this.defaultTooltipText = this.taskTooltip.innerText;
		}
		this.taskTooltip.innerText = this.task.name;
	}

	@HostListener('mouseout')
	onMouseOut() {
		if (this.taskTooltip) {
			this.taskTooltip.innerText = this.defaultTooltipText;
		}
	}*/

	ngOnInit(){
		this.icons.length = this.task.tareasRequeridas;
		this.icons.fill({ name: this.task.name });
	}
}