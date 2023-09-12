class BIBLIOTECA {
    constructor(nombre,autor,year) {
        this.nombre = nombre;
        this.autor = autor;
        this.year = year;
}
}

class repisa {
    constructor(){
    this.repisa = [];
    }

agregar(nombre,autor,year){
    this.repisa.push(nombre,autor,year);
    console.log(`Se agrego el siguiente libro ${nombre.nombre} del Autor ${autor.autor} que se publico en ${year.year}`);
}; 

eliminar(nombre){
        const indice = this.repisa.findIndex(libro => libro.nombre === nombre);
        if (indice !== -1) {
        this.repisa.splice(indice, 1);
        console.log(`Se elimino el siguiente libro ${nombre}`);
        }
    }

}



