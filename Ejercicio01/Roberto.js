/*Solicitar el nombre de 5 estudiantes con su correspondiente nota.
Luego mostrar el promedio de todos los estudiantes
Mostrar el nombre y nota del estudiante con la nota más alta
 */


let Vnombre = [];
let Vnota= [];


for (let i = 0; i < 5; i++){
    let Vnombre = prompt("Ingrese  por favvor, el nombre del estudiantes");
    let Vnota = Number(prompt("Ingrese por favor, la nota del estudiante:"));

    Vnombre.push(Vnombre);
    Vnota.push(Vnota);
}

let SumaNotas = 0;
for(let i = 0; i < notas.length; i++ ){
    SumaNotas += notas[i];
}
var promedio = SumaNotas / notas.lenght;

console.log("Promedio de notas: " + promedio);

//Encontrando nota alta

let IndiceNotaAlta = 0;

for (let i = 0; i < notas.lenght; i++){
    if(notas[i] > notas[IndiceNotaAlta]){
        IndiceNotaAlta = i;
    }
}

consolee.log("Estudiante con la nota más alta: " + Vnombre[IndiceNotaAlta] + Vnota[IndiceNotaAlta]);