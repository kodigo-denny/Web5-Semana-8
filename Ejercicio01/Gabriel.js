/*
Solicitar el nombre de 5 estudiantes con su correspondiente nota.
Luego mostrar el promedio de todos los estudiantes
Mostrar el nombre y nota del estudiante con la nota más alta
*/

let vectorNombre = []
let vectorNota = []
let acc = 0

for (i = 0; i < 5; i++){

    vectorNombre.push(prompt("Ingrese su nombre"));
    vectorNota.push(Number(prompt("Ingrese su nota")));

    acc = acc + vectorNota[i]
};



console.log(`El promedio de los estudiantes${acc/5}`)

//para la nota mas alta//

let NotaMasAlta = 0

for (let i = 0; i < vectorNota.length; i++){
    if (vectorNota[i] > largest) {
        largest = vectorNota[i];
        pos = i
    }
}

alert(`la nota mas alta corresponde a ${vectorNombre[pos]} con la nota de: ${largest}`);