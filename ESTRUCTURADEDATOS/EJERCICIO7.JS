class Estudiante {
    constructor(Nombre,matrucula){
    
    this.Nombre = Nombre;
    this.matrucula = matrucula;
    this.notas = [];
}

mostrarInformacion() {
    console.log(`El Alumno se llama: ${this.nombre}, con matricula ${this.matrucula} con calificaciones ${this.notas}\n`);
}



}