import { Component } from "@angular/core";

@Component({
	selector: "app-component",
	template: `<h1>{{saludo}}</h1>
	<input type="text" [(ngModel)]="saludo" />`
})
export class AppComponent{
	private strSaludo: string = "Hola mundo";

	get saludo():string{
		return this.strSaludo;
	}

	set saludo(strNuevo: string){
		this.strSaludo = strNuevo;
	}
}