const Estudiantes = [

];

const materia = [

];

const calificaciónes = [

];

const AgregarEstudiante = (Nombre) => {
    Estudiantes.push(Nombre);
    calificaciónes.push([]);
}

const agregarmateria = (nombremateria) => {
    materia.push(nombremateria);
}


const agregarcali = (Nombre, materia, calificación) => {
    let indexAlumno = Estudiantes.indexOf(Nombre);
    let indexAsignatura = materia.indexOf(materia);

    calificaciónes[indexAlumno][indexAsignatura] = calificación;
}

const editarCali = (nombre, Materia, calificacion) => {
    let indexAlumno = Estudiantes.indexOf(nombre);
    let indexAsignatura = materia.indexOf(Materia);

    calificaciónes[indexAlumno][indexAsignatura] = calificacion;
}

const Alumnosfinal = () => {
    console.log("**Lista de Alumnos**");
    for (let i = 0; i <= Estudiantes.length - 1; i++){
        console.log(`Nombre : ${Estudiantes[i]}`);
    }
}

const Materiasfinal = () => {
    console.log("**Lista de Materias**");
    for (let i = 0; i <= materia.length - 1; i++){
        console.log(`Materia : ${materia[i]}`);
    }
}

const Califinal = () => {

    for (let a = 0; a <= Estudiantes.length - 1; a++){
        for (let b = 0; b <= materia.length - 1; b++){
            console.log(`Alumno: ${Estudiantes[a]} Materia: ${materia[b]} Calificación: ${calificaciónes[a][b]}`);
        }
    }   
}

const boleta = (Opcion, nombre, materia, calificacion) => {
    console.log("Seleccione una opcion: ");
    console.log("1- Agregar Estudiantes")
    console.log("2- Agregar Materias")
    console.log("3- Agregar Calificaciones")

    switch(Opcion){
        case "1":
            AgregarEstudiante(nombre);
            break;
        case "2":
            agregarmateria(materia);
            break;
        case "3":
            agregarcali(nombre,materia,calificacion);
        case "4":
            editarCali(nombre,materia,calificacion);
        default:
            console.log("Favor de ingresar una opcion valida ");
    }
}

boleta("1","Enrique","","");

console.log("Se ha añadido el alumno \n");

boleta("1","Guzman","","");
console.log("Se ha añadido el alumno \n");

boleta("1","Brian","","");

console.log("Se ha añadido el alumno \n");

boleta("1","Carlos","","");

console.log("Se ha añadido el alumno \n");

boleta("2","","Español","");

console.log("Se ha añadido la materia \n");

boleta("2","","Matemáticas","");

console.log("Se ha añadido la materia \n");

boleta("2","","Geografía","");

console.log("Se ha añadido la materia \n");

boleta("2","","Historia","");

console.log("Se ha añadido la materia \n");

boleta("3","Enrique","Español","9.5");

console.log("Se ha añadido la calificación \n");

boleta("3","Enrique","Matemáticas","8.5");

console.log("Se ha añadido la calificación  \n");

boleta("3","Enrique","Geografía","9.0");

console.log("Se ha añadido la calificación  \n");

boleta("3","Enrique","Historia","8.0");

console.log("Se ha añadido la calificación  \n");

boleta("3","Guzman","Español","9.5");

console.log("Se ha añadido la calificación  \n");

boleta("3","Guzman","Matemáticas","8.5");

console.log("Se ha añadido la calificación  \n");

boleta("3","Guzman","Geografía","9.0");

console.log("Se ha añadido la calificación  \n");

boleta("3","Guzman","Historia","8.0");

console.log("Se ha añadido la calificación  \n");

boleta("3","Brian","Español","9.5");

console.log("Se ha añadido la calificación  \n");

boleta("3","Brian","Matemáticas","8.5");

console.log("Se ha añadido la calificación  \n");

boleta("3","Brian","Geografía","9.0");

console.log("Se ha añadido la calificación  \n");

boleta("3","Brian","Historia","8.0");

console.log("Se ha añadido la calificación  \n");

boleta("3","Carlos","Español","9.5");

console.log("Se ha añadido la calificación  \n");

boleta("3","Carlos","Matemáticas","8.5");

console.log("Se ha añadido la calificación  \n");

boleta("3","Carlos","Geografía","9.0");

console.log("Se ha añadido la calificación \n");

boleta("3","Carlos","Historia","8.0");

console.log("Se ha añadido la calificación  \n");

Alumnosfinal();

Materiasfinal();

Califinal();

boleta("4","Enrique","Español","10.0");

console.log("Se ha modificado la calificación  \n");

boleta("4","Enrique","Matemáticas","10.0");

console.log("Se ha modificado la calificación  \n");

boleta("4","Enrique","Geografía","10.0");

console.log("Se ha modificado la calificación  \n");

boleta("4","Enrique","Historia","10.0");

console.log("Se ha modificado la calificación  \n");

Califinal();
