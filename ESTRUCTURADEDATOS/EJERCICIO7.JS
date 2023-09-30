class Estudiante {
    constructor(Nombre,matrucula){
    
    this.Nombre = Nombre;
    this.matrucula = matrucula;
    this.notas = [];
}

MostrarInformacion() {
    console.log(`El Alumno se llama: ${this.nombre}, con matricula ${this.matrucula} con calificaciones ${this.notas}\n`);
}}

class Alimno {
    
Agregar(notas){
    this.notas.push(notas)
};

Promedio() {
    if (this.notas.length === 0) {
        return 0;
    }
    const sumaNotas = this.notas.reduce((acumulador, nota) => acumulador + nota, 0);
    const promedio = sumaNotas / this.notas.length;
    return promedio;
}

mostrarDatos() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Matrícula: ${this.matricula}`);
    console.log(`Notas: ${this.notas.join(', ')}`);
    console.log(`Promedio: ${this.Promedio()}`);
}




}


