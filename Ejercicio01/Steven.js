/*
Solicitar el nombre de 5 estudiantes con su correspondiente nota.
Luego mostrar el promedio de todos los estudiantes
Mostrar el nombre y nota del estudiante con la nota más alta
*/

let vectorNombre=[];
let vectorNotas=[];
let acu= 0
for(i= 0; i<=4; i++)
{
    vectorNombre.push(promt("Ingrese un nombre:"))
    vectorNotas.push(Number(prompt("ingrese su respectiva nota:")))
    acu= acu+vectorNotas[i]
}
let promedio= acu/5;
alert(`El promedio de los estudiantes es: ${promedio}`);
for (let i = 0; i<=4; i++) 
{
    let nMayor=0;
    vectorNombre[i]=nMayor;
    if (nMayor>nMayor)
    {

    }
    
}
