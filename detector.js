'use strict';
const mentiras = {
    1: "Alguna vez te robaste algún objeto de tu oficina, salón de clases, u otro lugar.", 
    2: "Te dieron demás en el cambio y te lo quedaste.",
    3: "Te pasaste una luz roja del semáforo.",
    4: "Te fuiste sin pagar alguna cosa del supermercado.",
    5: "Saliste a comprar un encargo muy tarde y como no lo encontraste dijiste que no había.",
    6: "Dijiste que habías sacado mejor nota que el peor alumno de tu clase solo por quedar bien.",
    7: "En una fiesta dijiste que solo tomarías el último trago, pero te amaneciste.",
    8: "Dijiste que después de Navidad y Fin de año empezarías la dieta.",
    9: "Fuiste capaz de tirarte un pedo en el ascensor y echar la culpa a otra persona ahí dentro.",
    10: "Dijiste que no te volverías a conectar a jugar y mira lo volviste a hacer.",
    11: "Saludaste en la calle a alguien que hace mucho tiempo no veías y ni siquiera te acordabas de quien era.",
    12: "Dices lo contrario, pero le diste el voto al Presidente actual.",
    13: "Aunque digas lo contrario, sigues queriendo que a tu ex-Presidente. ¡Ya supéralo!",
    14: "Le dijiste a tu suegra que no se vaya, cuando todos sabemos que ya no la soportabas en casa.",
    15: "Dijiste que no puedes salir, pero sabemos que tu esposa no te deja.",
    16: "Dices que nadie te manda, pero todos sabemos que en casa no puedes opinar mucho!!!",
    17: "Mientes, mientes y mientes!!!",
    18: "¿Y ahora? No tengo idea de lo que estás diciendo.",
    19: "No tengo la culpa de que siempre mientas",
    20: "No lo quería decir así, pero TODOS saben que mientes.",
    21: "De verdad no mientes, te felicito.",
    22: "Excelente, eres un buen ciudadano."
};


function detectaMentiras(){

    let miente = Math.floor(Math.random()*3);
    //console.log(miente);

    if (miente == 0) {
        alert("No me decido todavía, pero...")
        analizarMentira(null)
    } else if ( miente == 1) {
        analizarMentira(detectarMentira());
    } else if(miente==2) {
        alert("No mientes, pero...");
        analizarMentira(miente);
    }
}


function detectarMentira(){
    let mentira = Math.floor(Math.random()*24);    
    let respuesta = mentiras[mentira];
    return respuesta;
}

function analizarMentira(mentira=null) {
    if (mentira) { // si miente
        alert(detectarMentira());
    }
    else if (mentira == 2) { // no miente
        alert(mentiras[21]);
        return;
    } else if ((mentira == null) || (mentira == 0)){ //indeciso, hemos usado NULL
        alert("Puedes volver a presionar para saber si cambio de opinión.");
    } else {
        alert(detectarMentira());
    }
}


