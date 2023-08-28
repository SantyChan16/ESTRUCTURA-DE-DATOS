const estudiante = [ "Brian","Angel","Irving","Sanchez","Javier" ];
const Materias = [ "Matematicas,","Histotia,","Ingles," ];

let calificaciones=[
    [8, 9, 8],
    [9, 10, 9],
    [7, 8, 9],
    [9, 8, 9],
    [10, 8, 9]
];

const Boleta = () => {

    console.log("Las calificaciones son las siguientes: \n")
    for(let i = 0; i <= estudiante.length - 1; i++){
        for(let a = 0; a <= Materias.length - 1; a++){
            console.log(`Alumno:  ${estudiante[i]}  Materia:  ${Materias[a]}  Calificacion:  ${calificaciones[i][a]} \n `);
        };
    };
}
Boleta();

const agregar = (materia,cali) => {
    Materias.push(materia);
    calificaciones.push(cali);
};

console.log("Desea agregar una matera: \n")

const editar = (opcion,materia,cali) => {
    console.log("Ingrese el nombre de la materia")

    let eleccion = opcion;
    
    switch (eleccion) {
        case '1':
            agregar(materia,cali);
            break; 
        default:
            break;
    }
};
editar("1", "Algebra",0);
Boleta();
