var Saludar;
(function (Saludar) {
    //export es importante para poder acceder a la clase fuera de este modulo
    var Saludo = (function () {
        function Saludo(nombre) {
            this.nombre = nombre;
            console.log(nombre);
        }
        return Saludo;
    }());
    Saludar.Saludo = Saludo;
    var NavidadSaludo = (function () {
        function NavidadSaludo(nombre) {
            if (nombre === void 0) { nombre = "Pipe ome gonorrea"; }
            this.nombre = nombre;
            console.log("Feliz navidad " + nombre);
        }
        return NavidadSaludo;
    }());
    Saludar.NavidadSaludo = NavidadSaludo;
})(Saludar || (Saludar = {}));
var NavidadSaludo = Saludar.NavidadSaludo;
var navidadSaludo = new NavidadSaludo("Pipe");
