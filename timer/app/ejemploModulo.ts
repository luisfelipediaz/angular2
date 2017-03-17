module Saludar{
	//export es importante para poder acceder a la clase fuera de este modulo
	export class Saludo{
		constructor(public nombre: string){
			console.log(nombre);
		}
	}

	export class NavidadSaludo{
		constructor(public nombre: string = "Pipe ome gonorrea"){
			console.log(`Feliz navidad ${nombre}`);
		}
	}
}

import NavidadSaludo = Saludar.NavidadSaludo;
var navidadSaludo = new NavidadSaludo("Pipe");