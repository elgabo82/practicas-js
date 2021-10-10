'use strict';
// helado / precio
let h1 = 5;
let h2 = 3;
let h3 = 5;
let h4 = 2;

function heladeriaJS(){

let pregunta = preguntaHelado();
let pago = preguntaPago();
let res = 0;

if (isNaN(pregunta)) {
    alert("Debe ingresar solo números en las opciones de Helados.");
    return;
}

if (isNaN(pago)) {
    alert("Debe ingresar solo números en el valor del pago.");
    return;
}

if (pregunta == 1)  {
    if (pago == h1) {
        alert("Escogió el de Chocolate su pago ha sido exitoso. También el de Chocolate y Brownies cuesta igual, puedes probar la próxima.");
    } else if ( pago < h1) {
        alert("Escogió el de Chocolate pero el valor a pagar es menor, también el de Chocolate y Brownies cuesta lo mismo");
    } else {
        res = pago - h1;
        alert(`Escogió el de Chocolate su cambio es de: $${res}, también el de Chocolate y Brownies cuesta lo mismo.`);
    }
}
else if (pregunta == 2) {
    if (pago == h2) {
        alert("Escogió el de Chicle su pago ha sido exitoso.");
    } else if ( pago < h2) {
        alert("Escogió el de Chicle pero el valor a pagar es menor.");
    } else {
        res = pago - h2;
        alert(`Escogió el de Chicle su cambio es de: $${res}.`);
    }
} else if (pregunta == 3) {
    if (pago == h3) {
        alert("Escogió el de Chocolate y Brownie su pago ha sido exitoso. También el de Chocolate cuesta igual, puedes probar la próxima.");
    } else if ( pago < h1) {
        alert("Escogió el de Chocolate y Brownie pero el valor a pagar es menor, también el de Chocolate cuesta lo mismo");
    } else {
        res = pago - h1;
        alert(`Escogió el de Chocolate - Brownie su cambio es de: $${res}, también el de Chocolate cuesta lo mismo.`);
    }
} else if (pregunta == 4) {
    if (pago == h4) {
        alert("Escogió el de Banana split y su pago ha sido exitoso.");
    } else if ( pago < h1) {
        alert("Escogió el de Banana split pero el valor a pagar es menor.");
    } else {
        res = pago - h1;
        alert(`Escogió el de Banana split su cambio es de: $${res}.`);
    }    
} else {
    alert("Escogió un helado incorrecto.");
}
}

function preguntaHelado(){

    alert("Helados JS / (1) Chocolate - $5, (2) Chicle - $3, (3) Brownie / Chocolate - $5, (4) Banana split - $2\n");

    let res = prompt("Escoja un helado (1, 2, 3, 4): ");
    return res;
}

function preguntaPago(){
    let res = prompt("Ingrese su pago (solo enteros): ");

    return res;
}
