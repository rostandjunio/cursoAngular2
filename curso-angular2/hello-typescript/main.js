var minhaVar = 'minha variavel';
function minhaFunc(x, y) {
    return x + y;
}
//ES 6 ou ES 2015
var num = 2;
var PI = 3.14;
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
numeros.map(function (valor) { return valor * 2; }); //ES 2015
var Materia = /** @class */ (function () {
    function Materia() {
    }
    Materia.prototype.soma = function (x, y) {
        return x + y;
    };
    return Materia;
}());
var n1 = 'sfsdfds';
n1 = 4;
