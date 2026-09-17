"use strict";
// Función tipada: recibe un número y devuelve un número.
function redondear(valor) {
    return Math.round(valor * 100) / 100;
}
// La clase implementa la interfaz; sus propiedades llevan tipo.
class Estudiante {
    constructor(nombre, creditos) {
        this.nombre = nombre;
        this.creditos = creditos;
    }
    estado() {
        if (this.creditos < 1 || this.creditos > 24) {
            return "Créditos inválidos";
        }
        else if (this.creditos >= 12) {
            return "Matriculado";
        }
        else {
            return "Pendiente";
        }
    }
}
// Arreglo tipado: solo admite objetos Estudiante.
const estudiantes = [
    new Estudiante("María Torres", 18),
    new Estudiante("Luis Pérez", 8),
    new Estudiante("Ana Ruiz", 14)
];
console.log("=== Mini-LMS (Node + TypeScript) ===");
estudiantes.forEach((e) => {
    console.log(`${e.nombre} -> ${e.estado()}`);
});
const matriculados = estudiantes.filter((e) => e.creditos >=
    12).length;
console.log("Matriculados:", matriculados);
console.log("Promedio de créditos:", redondear(estudiantes.reduce((suma, e) => suma + e.creditos, 0) /
    estudiantes.length));
let totalCreditos = 0;
for (let i = 0; i < estudiantes.length; i++) {
    totalCreditos += estudiantes[i].creditos;
}
console.log("Suma total de créditos:", totalCreditos);
const maxCreditos = Math.max(...estudiantes.map(e => e.creditos));
const minCreditos = Math.min(...estudiantes.map(e => e.creditos));
const estudianteMax = estudiantes.find(e => e.creditos === maxCreditos);
const estudianteMin = estudiantes.find(e => e.creditos === minCreditos);
console.log("Créditos máximos: " + maxCreditos + " Estudiante: " + estudianteMax?.nombre);
console.log("Créditos mínimos: " + minCreditos + " Estudiante: " + estudianteMin?.nombre);
