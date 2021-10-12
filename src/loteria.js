'use strict';
 //Usado para hacer algo más estricto JS

function nroBoletos(){
    let cantidad = 0;
    while (cantidad <=0) {
        cantidad = prompt("Ingrese la cantidad de boletos deseados");
    }

    return cantidad;
}

function pagarBoletos() {
    let pago = 0;
    
    while (pago <= 0){
        pago = prompt("Ingrese el pago:");
    }
        
    return pago;    
}

function compraBoletos() {    

    let cantidad = nroBoletos();
    let pago = pagarBoletos();
    let vuelto = pago - cantidad;

    if (isNaN(cantidad)){
        alert("Debe ingresar números en cantidad.");
        return;
    }

    if (isNaN(pago)){
        alert("Debe ingresar números en el pago.");
        return;
    }   
    
    if ( vuelto < 0) {
        alert("El Pago no es suficiente.");
        return;
    }

    if (cantidad == 1) {
        //solo compra 1
        alert('Solo compró un boleto.')
    } else if (cantidad == 2) {
        // solo compra 2
        alert('Compró dos boletos.') 
    } else if (cantidad == 3){
        // si compra 3 y sobra regala el vuelto
        alert('Compró tres boletos y su vuelto será donado al SuperMercado Solidario. ¡Muchas Gracias!')
    }
    
    agregarElementos(cantidad, pago, vuelto);
}

function generarBoletos(cantidad) {
    //let boletos = Math.floor(Math.random()*1000);
    const elemento3 = document.createElement('li');
    
    let boleto = 0;

    for (let i=0; i<cantidad; i++){        
        boleto = Math.floor(Math.random()*1000);
        elemento3.textContent += `Boleto ${i+1}, Nro. ${boleto}. `
    }

    return elemento3;    
}

function agregarElementos(cantidad, pago, vuelto){    
    
    const elemento1 = document.createElement('li');
    elemento1.textContent = `Cantidad de boletos: ${cantidad}`

    const elemento2 = document.createElement('li');

    if (cantidad == 3) {
        elemento2.textContent = `Su pago es de: $${pago} y el vuelto es de $${vuelto}. Su vuelto será donado al SuperMercado Solidario, ¡Muchas Gracias!'`;
    } else if (cantidad != 3) {
        elemento2.textContent = vuelto ? `Su pago es de: $${pago} y el vuelto es de $${vuelto}.`: `Su pago es de: $${pago}.`;
    }
    

    const lista = document.getElementById("lista");

    lista.appendChild(elemento1);
    lista.appendChild(elemento2);
    
    const elemento3 = generarBoletos(cantidad);
    lista.appendChild(elemento3);
}