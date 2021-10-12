'use strict';

function calcular() {
    const elemento = document.getElementById("calculadora").value; // Se obtiene el valor del input "calculadora"
    const nuevoElemento = document.createElement('input'); // Se crea el nuevo elemento en el HTML

    let valor = document.getElementById("calculadora").value // Para saber si está vacío el input

    const seccionCalculadora = document.getElementById("seccion-calculadora"); // Se obtiene el lugar donde se pondrá el nuevo elemento

    let res = math.evaluate(elemento); // Resultado de evaluar la cadena

    let siExiste = document.getElementById("resultado");

    if (valor === ''){ // Si está vacío se sale de la función
        //console.log('Vacío');
        return;
    }
    
    document.getElementById("calculadora").onkeydown = (e) =>{ // Se maneja mejor el evento keydown
        //console.log(e.key);
        if ((e.key === 'Enter')) {
            e.preventDefault();
            document.getElementById("boton").click(); // Ejecuta el clic del botón
        }
    };    

    if (siExiste) {        
        siExiste.value =  res; // Solo muestra el resultado.
    } else {        
        nuevoElemento.id = "resultado"; // Le asigna el id para poder identificarlo luego y evitar crearlo de nuevo.
        nuevoElemento.type = 'text'; // Elemento tipo texto
        nuevoElemento.readOnly = true; // Lo pone en modo lectura
        nuevoElemento.value =  res; // Muestra el resultado.
        seccionCalculadora.appendChild(nuevoElemento); // Agrega el nuevo elemento.
    }    
    
}