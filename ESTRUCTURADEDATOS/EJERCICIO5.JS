//! Crea una biblioteca // con arreglos

const biblioteca ={
    libros: [],

//! Agregar libros ala biblioteca: se agrega al arreglo llamado libros

    agregar(Nombre,Autor,Year){

    const Nuevolibro = { Nombre,Autor,Year };
        this.libros.push(Nuevolibro);
        console.log(`El libro "${Nombre}" se agrego ala biblioteca`);
    },

//! Elimina libros de la biblioteca: se eliminan del arreglo llamado libros

    eliminar(Nombre){

    const Eliminarlibro = {Nombre};
    this.libros.pop(Eliminarlibro);
    console.log(`El libro "${Nombre}" se elimino de la biblioteca`);
    },

//! Edita libros de la biblioteca: y se modifican en el areglo llamado libros

    editar(Nombre,Autor,Year){

    const Editarlibro = {Nombre,Autor, Year}
    this.libros.splice(Editarlibro);
    console.log(`El libro "${Nombre}" se a modificado el Autor A :"${Autor}" y la fecha a "${Year}"`);

    },

}




biblioteca.agregar("El Gran Gatsby", "F. Scott Fitzgerald", 1925);
biblioteca.agregar("CRIEMN Y CASTIGO", "F. Scott Fitzgerald", 1925);
biblioteca.eliminar("El Gran Gatsby");
biblioteca.editar("El Gran Gatsby", "F. Scott", 1588);
