import { Component } from "@angular/core";

@Component({
	selector: "countdown",
	template: `<h1>Quedan: {{seconds}}</h1>`
})
export class CountDownComponent{
	seconds: number = 25;
	intervalId: number;

	constructor(){
		this.intervalId = setInterval(() => this.tick(), 1000);
	}

	private tick(): void{
		if(--this.seconds < 0){
			clearInterval(this.intervalId);
		}
	}
}