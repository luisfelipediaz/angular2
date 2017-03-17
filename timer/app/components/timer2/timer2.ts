import { Component } from "@angular/core";

@Component({
	selector: "timer2",
	templateUrl: "./app/components/timer2/timer2.html"
})
export class timer2{
	onCountdownCompleted(): void {
		alert('¡Tiempo Acabado!');
	}
}