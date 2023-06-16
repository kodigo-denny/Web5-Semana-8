/* Solicitar el nombre de 5 estudiantes con su correspondiente nota.
Luego mostrar el promedio de todos los estudiantes
Mostrar el nombre y nota del estudiante con la nota más alta */

let estudiantes = [];
let notas = [];
let ac = 0;

// Ingresar Nombres y Notas
for (i = 0; i <= 4; i++) {
    estudiantes.push(("Ingrese nombre del estudiante"));
    notas.push(Number(prompt("Ingrese la nota de los estudiantes")));
    ac = ac + notas[i];
};
 //Mostrar Promedio
let promedio = ac / 5;
console.log('El promedio de los estudiantes es: ' + promedio);

//Mostrar Nota más alta

for (let i = 0; i < notas.length; i++) {
    if (notas[i] > 8) {
        notaAlta = notas[i];
        console.log("El estudiantes con la nota más alta es: " ${estudiantes} + ${notaAlta})
    }
};



