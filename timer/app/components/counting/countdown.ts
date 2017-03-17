import { Component, Input, Output, EventEmitter, ViewEncapsulation } from "@angular/core";

@Component({
	selector: "countdown",
	template: `<h1>Quedan: {{seconds}}</h1>`,
	encapsulation: ViewEncapsulation.Emulated
})
export class CountDownComponent{
	@Input() seconds: number = 25;
	intervalId: number;
	@Output() complete: EventEmitter<any> = new EventEmitter();
	@Output() progress: EventEmitter<number> = new EventEmitter();

	constructor(){
		this.intervalId = setInterval(() => this.tick(), 1000);
	}

	private tick(): void{
		if(--this.seconds < 1){
			clearInterval(this.intervalId);
			this.complete.emit(null);
		}
		this.progress.emit(this.seconds);
	}
}