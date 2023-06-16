/*Solicitar el nombre de 5 estudiantes con su correspondiente nota.
Luego mostrar el promedio de todos los estudiantes
Mostrar el nombre y nota del estudiante con la nota más alta */

let  sum =0;
arrayNombre = [];
arrayNota = [];
mayor = 0;

for(i = 0; i < 5; i++){
    const consultaNombre = prompt('Porfavor ingrese su nombre');
    arrayNombre.push(consultaNombre); // Aqui almaceno los nombres de mi prompt 'Consulta nombre'

    const consultaNota = parseFloat(prompt('Porfavor ingrese su nota'));
    arrayNota.push(consultaNota); // Aqui almaceno las notas de mi prompt 'consulta nota'
    
    sum += consultaNota;

    if(arrayNota[i] > mayor){
         mayor = arrayNota[i]

    }
}

const promedio = sum / arrayNota.length; // operacion para calcular el promedio


// Paso 2 mostrar el promedio de los estudiantes
console.log(`El promedio de los estudiantes es: ${promedio.toFixed(2)}` );


for(let i = 0; i < arrayNombre.length; i++){
    console.log(arrayNombre[i]+ ' - ' + arrayNota[i] + (mayor == arrayNota[i] ? "La nota mas alta": ""));
}  