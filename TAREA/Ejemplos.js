/*
*class = clase = es una fabrica de objetos
*Constructor = a la maquina que fabrica los objetos
*Parametros = caracteristocias
*Objeto = producto de la maquina (this)
*Objestos tienen propiedades = parametro
*Objetos tienen metodos = funciones de la maquina
*instanciar = crear un objeto de una clase
*/

class OniichanPC {
    constructor(gabinete,motherboard,procesador, ram, tipodisco,tarjetadevideo){
        this.gabinete = gabinete;
        this.motherboard = motherboard;
        this.procesador = procesador;
        this.ram = ram;
        this.tipodisco = tipodisco;
        this.tarjetadevideo = tarjetadevideo;

        this.infoPc= `
        la pc Oniichan tiene las siguientes caracteristicas:
        Gabinte: ${this.gabinete}
        Motherboar: ${this.motherboard}
        Procesador: ${this.procesador}
        Ram: ${this.ram}
        Tipo de disco: ${this.tipodisco}
        Tarjeta de video: ${this.tarjetadevideo}
        `

    }
    mostrarInfo() {
        console.log(this.infoPc);
    }
    }
    
    const pc1 = new OniichanPC(
    "Gamer",
    "Asus",
    "Intel Core i9",
    "64GB",
    "SSD 3 TB",
    "Nvidia RTX 4080"
    );
    
    const pc2 = new OniichanPC(
    "Gamer",
    "Gigabyte",
    "Intel Core i7",
    "16GB",
    "SSD 254TB",
    "Nvidia RTX 4080"
    );
    
    pc1.mostrarInfo();
    pc2.mostrarInfo();
