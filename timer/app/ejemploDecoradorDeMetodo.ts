//target: Object (Object se puede cambiar si el decorador lo queremos solo para tipos especificos)
/*function LogCambios(target: Object, key: string){
	var valorPropiedad: string = this[key];

	if(delete this[key]){
		Object.defineProperty(target, key, {
			get: function(){
				return valorPropiedad;
			},
			set: function(newValue){
				valorPropiedad = newValue;
				//Ojo con esta concatenacion tener muy en cuenta puede servir mucho
				console.log(`${key} es ahora ${valorPropiedad}`);
			}
		});
	}
}

class Fruta{
	@LogCambios
	nombre: string;
}

var fruta = new Fruta();
fruta.nombre = "Banana";
fruta.nombre = "Platano";*/
function LogCambios(callbackObject: any): Function{
	return function(target: Object, key: string): void{
		var valorPropiedad: string = this[key];

		if(delete this[key]){
			Object.defineProperty(target, key, {
				get: function(){
					return valorPropiedad;
				},
				set: function(newValue){
					valorPropiedad = newValue;
					callbackObject.onchange.call(this, valorPropiedad);
				}
			});
		}
	}
}

class Fruta{
	@LogCambios({
		onchange: function(nuevoValor: string): void{
			console.log(`La fruta es ${nuevoValor} ahora`);
		}
	})
	nombre: string;
}

var fruta = new Fruta();
fruta.nombre = "Banana";
fruta.nombre = "Platano";