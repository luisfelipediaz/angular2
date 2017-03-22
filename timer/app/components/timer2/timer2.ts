import { Component, ViewChild } from "@angular/core";
import { CountDownComponent } from "../counting/countdown"

@Component({
	selector: "timer2",
	templateUrl: "./app/components/timer2/timer2.html"
})
export class timer2{

	private segundos: number = 25;

	@ViewChild('counter') counter: CountDownComponent;

	constructor(){

	}

	onCountProgress(): void{
		console.log(this.counter.seconds);
	}

	onCountdownCompleted(): void {
		alert('¡Tiempo Acabado!');
	}
}