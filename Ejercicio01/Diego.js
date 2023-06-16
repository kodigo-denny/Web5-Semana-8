/*Solicitar el nombre de 5 estudiantes con su correspondiente nota.
Luego mostrar el promedio de todos los estudiantes
Mostrar el nombre y nota del estudiante con la nota más alta*/


let vectorNombre = [];
let vectorNota = [];
let acc = 0;
let avg;
let largest = 0;
let pos = 0

for(var i = 0; i < 5; i++){
   vectorNombre.push(prompt("Ingrese un nombre"));
   vectorNota.push(Number(prompt("Ingrese una nota")));
    acc += vectorNota[i]; 
};


    avg = acc / vectorNota.length;
    
    alert(`El promedio de los estudiantes es: ${avg}`);

    for( let i = 0; i < vectorNota.length; i++){
        if (vectorNota[i] > largest) {
             largest = vectorNota[i];
             pos = i
        }
    };

    alert(`La mayor nota corresponde al alumno ${vectorNombre[pos]} con una nota de: ${largest}`);