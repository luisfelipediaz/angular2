var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
function LogCambios(callbackObject) {
    return function (target, key) {
        var valorPropiedad = this[key];
        if (delete this[key]) {
            Object.defineProperty(target, key, {
                get: function () {
                    return valorPropiedad;
                },
                set: function (newValue) {
                    valorPropiedad = newValue;
                    callbackObject.onchange.call(this, valorPropiedad);
                }
            });
        }
    };
}
var Fruta = (function () {
    function Fruta() {
    }
    return Fruta;
}());
__decorate([
    LogCambios({
        onchange: function (nuevoValor) {
            console.log("La fruta es " + nuevoValor + " ahora");
        }
    }),
    __metadata("design:type", String)
], Fruta.prototype, "nombre", void 0);
var fruta = new Fruta();
fruta.nombre = "Banana";
fruta.nombre = "Platano";
