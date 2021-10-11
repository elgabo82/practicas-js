'use strict';

let invitadoPersona = [
    {
        "nombre": "Gabriel",
        "edad": 39,
        "hora_ingreso": 22
    },
    {
        "nombre": "Leandro",
        "edad": 36,
        "hora_ingreso": 22
    },
    {
        "nombre": "Renata",
        "edad": 33,
        "hora_ingreso": 23
    },
    {
        "nombre": "Luis",
        "edad": 17,
        "hora_ingreso": 21
    },
    {
        "nombre": "Andrea",
        "edad": 15,
        "hora_ingreso": 22
    },
    {
        "nombre": "Carla",
        "edad": 17,
        "hora_ingreso": 24
    },
    {
        "nombre": "Elvis",
        "edad": 20,
        "hora_ingreso": 2
    },
    {
        "nombre": "Iván",
        "edad": 20,
        "hora_ingreso": 3
    },
    {
        "nombre": "Romina",
        "edad": 19,
        "hora_ingreso": 1
    }
]


function verificarEdad_Horario() {

    const lista = document.getElementById("lista");
    let titulo1 = document.createElement('b');
    let titulo2 = document.createElement('b')

    const lista2 = document.getElementById("principal");
    let titulo3 = document.createElement('b')

    titulo1.textContent = "Lista de Mayores de edad."
    lista.append(titulo1);
    
    invitadoPersona.map((elemento) => {
        if (elemento.edad >= 18) {
            let elemento1 = document.createElement('li');
            elemento1.textContent = `${elemento.nombre} es mayor de edad, tiene ${elemento.edad}.`;
            lista.appendChild(elemento1);
            //console.log(`${elemento.nombre} es mayor de edad.`);
        }       
    });

    titulo2.textContent = "Lista de Menores de edad.";
    lista.append(titulo2);
    
    invitadoPersona.map((elemento) => {        
        if (elemento.edad <= 18) {
            let elemento1 = document.createElement('li');
            elemento1.textContent = `${elemento.nombre} no es mayor de edad, tiene ${elemento.edad}.`;
            lista.appendChild(elemento1);
            //console.log(`${elemento.nombre} es mayor de edad.`);
        }        
    });


    titulo3.textContent = "Lista de quienes ingresaron después de las 2AM hasta máximo las 4AM.";
    lista2.append(titulo3);

    invitadoPersona.map((elemento) => {
        if ((elemento.hora_ingreso >=2) && (elemento.hora_ingreso <=4)){
            console.log(elemento.hora_ingreso);
            if (elemento.edad >= 18) {
                let elemento2 = document.createElement('li');
                elemento2.textContent = `${elemento.nombre}, registra el ingreso a las: 0${elemento.hora_ingreso}:00 horas y su consumo es gratuito por haber ingresado después de las 2AM.`;
                lista2.appendChild(elemento2);
            }
        }
    });
    
    // for (let arreglo in invitadoPersona) {
    //     elemento1 = document.createElement('li');
    //     elemento1.textContent = invitadoPersona[arreglo].nombre;
    //     lista.appendChild(elemento1);
    // }  
    
    //console.log(invitadoPersona);
}