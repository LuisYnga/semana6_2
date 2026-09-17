"use strict";
let nota1 = 12;
let nota2 = 9;
let nota3 = 15;
function calcularPromedio() {
    let pro = Math.round(((nota1 + nota2 + nota3) / 3) * 100) / 100;
    return "Promedio es: " + pro;
}
console.log(calcularPromedio());
