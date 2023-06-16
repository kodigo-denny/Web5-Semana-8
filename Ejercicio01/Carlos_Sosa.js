/*
Solicitar el nombre de 5 estudiantes con su correspondiente nota.
Luego mostrar el promedio de todos los estudiantes
Mostrar el nombre y nota del estudiante con la nota mas alta
*/

let vectorNombres = [];
let vectorNotas = [];
let sumaNotas = 0;
let notaMasAlta = 0;
let nombreNotaMasAlta;

for (i = 0; i < 5; i++) {
    vectorNombres[i] = prompt((i + 1) + ". Ingrese el nombre del estudiante: ");
    vectorNotas[i] = Number(prompt(`Ingrese la nota ${vectorNombres[i]}: `));

    sumaNotas += vectorNotas[i];

    if (vectorNotas[i] > notaMasAlta) {
        notaMasAlta = vectorNotas[i];
        nombreNotaMasAlta = vectorNombres[i];
    }
}

console.log("Promedio de todos los estudiantes: " + sumaNotas / vectorNotas.length);
console.log("El estuadiante con la nota mas alta es: " + nombreNotaMasAlta + " con una nota de " + notaMasAlta + ".");