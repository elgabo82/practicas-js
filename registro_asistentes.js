'use strict';

const asistentes = [
    {
        "nombre": "Gabriel",
        "asistencia_actual": "P",
        "total_dias": 30
    },
    {
        "nombre": "Leandro",
        "asistencia_actual": "P",
        "total_dias": 30
    },
    {
        "nombre": "Renata",
        "asistencia_actual": "P",
        "total_dias": 30
    },
    {
        "nombre": "Luis",
        "asistencia_actual": "A",
        "total_dias": 22
    },
    {
        "nombre": "Andrea",
        "asistencia_actual": "P",
        "total_dias": 27
    },
    {
        "nombre": "Carla",
        "asistencia_actual": "A",
        "total_dias": 20
    },
    {
        "nombre": "Elvis",
        "asistencia_actual": "P",
        "total_dias": 26
    },
    {
        "nombre": "Rafael",
        "asistencia_actual": "A",
        "total_dias": 29
    },
    {
        "nombre": "Romina",
        "asistencia_actual": "P",
        "total_dias": 21
    },
    {
        "nombre": "Miguel",
        "asistencia_actual": "A",
        "total_dias": 24
    },
    {
        "nombre": "Darío",
        "asistencia_actual": "A",
        "total_dias": 28
    },
    {
        "nombre": "Gabriela",
        "asistencia_actual": "P",
        "total_dias": 29
    }
]

const totalDias = 30; //Máximo 30 de ausencias permitidas.

function verificarAusencias(asistentes){
    let listado = [...asistentes];

    const lista = document.getElementById("lista");
    let titulo = document.createElement('b');
    let titulo2 = document.createElement('b');
    let titulo3 = document.createElement('b');
    let nroAusencias = ((totalDias * 1.30) - totalDias); // 30% = 30*1.3 = 39 días - total(30) = 9 ausencias máx.    

    titulo.textContent = "Listado de estudiantes Presentes hoy.";

    lista.append(titulo); // Agrego el título a la lista.    

    listado.map((elemento) => { // Listado de aistentes el día de hoy, y número total de asistencias durante el mes.
        if (elemento.asistencia_actual == 'P') {
            let elemento1 = document.createElement('li');
            elemento1.textContent = `Estudiante: ${elemento.nombre} - Días asistidos: ${elemento.total_dias}`;
            lista.appendChild(elemento1);
        }        
    });
    
    titulo2.textContent = 'Listado de estudiantes Ausentes hoy.';

    lista.append(titulo2);    

    listado.map((elemento) => { // Listado de ausentes el día de hoy y su total de inasistencias durante el mes.
        if (elemento.asistencia_actual == 'A') {
            let elemento2 = document.createElement('li');
            elemento2.textContent = `Estudiante: ${elemento.nombre} - Días asistidos: ${elemento.total_dias}`;
            lista.appendChild(elemento2);
        }
        
    });

    titulo3.textContent = "Listado de reprobados."

    lista.append(titulo3);    

    listado.map((elemento) => { // Verificar el porcentaje de ausencias y estudiantes reprobados.
        if ((totalDias - elemento.total_dias) >=nroAusencias){
            let elemento3 = document.createElement('li');
            elemento3.textContent = `${elemento.nombre} - Reprobado, por demasiadas ausencias.`;
            lista.appendChild(elemento3);
        }

    });    

}


const asistencia = () => verificarAusencias(asistentes);