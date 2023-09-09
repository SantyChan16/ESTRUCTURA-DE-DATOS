class Telcel {
    constructor(Marca,Modelo,Ram, Memoria,Pnatalla,pila){
        this.Marca = Marca;
        this.Modelo = Modelo;
        this.Ram = Ram;
        this.Memoria = Memoria;
        this.Pnatalla = Pnatalla;
        this.pila = pila;

        this.Disipositivo = `
        El Dispositipo tiene las siguientes caracteristicas: 
        Marca: ${this.Marca}
        Modelo: ${this.Modelo}
        Ram: ${this.Ram}
        Memoria: ${this.Memoria}
        Pantalla: ${this.Pnatalla}
        Pila: ${this.pila}
        `
}

Caracteristicas() {
    console.log(this.Disipositivo);
}}

const Disipositivo1 = new Telcel(
    "Samsung",
    "S20FE",
    "8",
    "128GB",
    "Amoled",
    "5400mAp"
);

const Disipositivo2 = new Telcel(
    "Xiaomi",
    "NOTE 12",
    "4",
    "128GB",
    "SuperAmoled",
    "4500mAp"
);


Disipositivo1.Caracteristicas();
Disipositivo2.Caracteristicas();