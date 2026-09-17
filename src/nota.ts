let nota1: number = 12;
let nota2: number = 9;
let nota3: number = 15;


function calcularPromedio(): string {
    let pro: number = Math.round(((nota1 + nota2 + nota3) / 3) * 100) / 100;
    return "Promedio es: " + pro;
}

console.log(calcularPromedio());

function suma():string{
    let sum:number=  nota1+nota2+nota3;
    return "La suma es: "+sum;
}
console.log(suma());

function mayor():string{
    let may: number = Math.max(nota1,nota2,nota3);
    return "El mayor es: "+may;
}
console.log(mayor());

function menor():string{
    let men: number = Math.min(nota1,nota2,nota3);
    return "El menor es: "+men;
}
console.log(menor());