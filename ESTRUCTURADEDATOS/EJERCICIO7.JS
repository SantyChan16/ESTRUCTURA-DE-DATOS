class Estudiante {
    constructor(Nombre,matricula){
    
    this.Nombre = Nombre;
    this.matricula = matricula;
    this.notas = [];
}

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

MostrarInformacion() {
    console.log(`El Alumno se llama: ${this.Nombre}, con matricula ${this.matricula} con calificaciones ${this.notas}\n`);
}
}

const alumno = new Estudiante ("Juan","19788")
const alumno1 = new Estudiante ("Pedro","19789")
const alumno2 = new Estudiante ("Julio","19790")

alumno.MostrarInformacion();
alumno1.MostrarInformacion();
alumno2.MostrarInformacion();
