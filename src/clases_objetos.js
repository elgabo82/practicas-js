class Animal {
    constructor(especie, tipo, color){
        this.especie = especie;
        this.tipo = tipo;
        this.color = color;
    }

    verInfo() {
        document.write(`<b>Especie:</b> ${this.especie} - <b>Tipo:</b> ${this.tipo} - <b>Color:</b> ${this.color} <br/>`)
    }
};


class claseGato extends Animal {
    constructor(especie, tipo, color, raza) {
        super(especie, tipo, color);
        this.raza = raza;
    }
    infoGato(){  
        document.write(`<b>Especie:</b> ${this.especie} - <b>Tipo:</b> ${this.tipo} - <b>Color:</b> ${this.color} - <b>Raza:</b> ${this.raza}<br/>`);
    }

    static maullar(){ // Se pueden usar sin necesidad de instanciar o crear un objeto: claseGato.maullar();
         alert("Miau");
    }
      
    maullar(){
        alert("Miau");  
    }

    set modificaRaza(nuevaRaza){
        this.raza = nuevaRaza;
    }

    get obtieneRaza(){
        return this.raza;
    }
}


//claseGato.maullar();

const gato = new claseGato("Mamífero", "Gato", "Amarillo", "Felpudo");
const perro = new Animal("Mamífero", "Perro", "Café");
const pato = new Animal("Ave", "Pato", "Blanco");

gato.infoGato();
//gato.maullar();
perro.verInfo();
pato.verInfo();

gato.modificaRaza="Lanudo";
gato.infoGato();
//alert(gato.obtieneRaza);