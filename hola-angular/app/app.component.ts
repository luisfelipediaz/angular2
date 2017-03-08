import { Component } from "@angular/core";

@Component({
    selector: "pipe-angular",
    template: `
        <h1> {{mensaje}} </h1>
        <input type="text" [(ngModel)]="mensaje" />
        <button (click)="clickBoton()">{{msjBoton}}</button>
    `
})
export class PipeComponent {
    mensaje: string;
    msjBoton: string;
    constructor() {
        this.mensaje = "Prueba de pipe";
        this.msjBoton = "Aun no mi perro";
    };

    clickBoton(): void {
        this.msjBoton = "Ahora si mi perro";
    }
}