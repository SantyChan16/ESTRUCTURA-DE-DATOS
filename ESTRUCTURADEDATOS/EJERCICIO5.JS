class Libro {
    constructor(nombre,autor,year) {
        this.nombre = nombre;
        this.autor = autor;
        this.year = year;
    }

mostrarInformacion() {
        console.log(`El libro se llama: ${this.nombre}, del autor ${this.autor}, publicado en el year ${this.year} \n`);
}

}

class Repisa {
    constructor(){
    this.repisa = [];
    }

agregar(nombre,autor,year){
    const libro = new Libro(nombre,autor,year)
    this.repisa.push(libro);
    console.log(`Se agrego el siguiente libro ${libro.nombre} del Autor ${libro.autor} que se publico en ${libro.year} \n`
    );
}; 

eliminar(nombre){
    const i = this.repisa.findIndex(libro => libro.nombre === nombre);
        if (i !== -1) {
        const eliminarlibro = this.repisa.splice(i, 1)[0];
        console.log(`Se elimino el siguiente libro ${eliminarlibro.nombre} del autor ${eliminarlibro.autor} publicado en ${eliminarlibro.year} \n`);
        }
}

editar(nombre,newnombre,newautor,newyear){
    const libro = this.repisa.find(libro => libro.nombre === nombre)
    if(libro){
        libro.nombre = newnombre;
        libro.autor = newautor;
        libro.year = newyear;
    console.log(`El libro ${nombre} se a editado \n`);
    }
}

Listarlibros() {
    this.repisa.forEach((nombres, index) => {
    console.log(`libro ${index + 1}:`);
    nombres.mostrarInformacion();
    });
    }
}

const miRepisa = new Repisa();


//! Agregar libros al arreglo libros
miRepisa.agregar("Crimen y Castigo", "Fyodor Dostoevsky", 1866);
miRepisa.agregar("El Gran Gatsby", "F. Scott Fitzgerald", 1925);
miRepisa.agregar("Don Quijote de la Mancha", "Miguel de Cervantes", 1605);
miRepisa.agregar("1984", "George Orwell", 1949);
miRepisa.Listarlibros();

//! Editar libros del arreglo
miRepisa.editar("Crimen y Castigo", "Crimen y Castigo (edición nueva)", "Fyodor Dostoevsky", 1866);
miRepisa.Listarlibros();

//! Eliminar libros del arreglo
miRepisa.eliminar("El Gran Gatsby");
console.log("Se a actualizado la lista de libros \n");

//! Imprimir la lista de libros actualizada
miRepisa.Listarlibros();