'use strict';

// Ejemeplos de arreglos
let array = ["Gabriel", "Leandro", "Renata"];
// Ejemplos de bucles for (in y of)

function revisarArray(array) {

    document.write("<br/><b>Accediendo a los índices del arreglo</b></br>");
    for (let arreglo in array) {
        document.write(arreglo + "<br/>");
        console.log(arreglo);
    }

    document.write("<br/><b>Accediendo a los elementos del arreglo</b></br>");

    for (let arreglo of array) {
        document.write(arreglo + "<br/>");
        console.log(arreglo);
    }
}

revisarArray(array);