const estudiante = [ "Brian","Angel","Irving","Sanchez","Javier" ];
const Materias = [ "Matematicas,","Histotia,","Ingles," ];

let calificaciones=[
    [8, 9, 8],
    [9, 10, 9],
    [7, 8, 9],
    [9, 8, 9],
    [10, 8, 9]
];

function Boleta () {

    console.log("Las calificaciones son las siguientes: \n")
    for(let i = 0; i <= estudiante.length - 1; i++){
        for(let a = 0; a <= Materias.length - 1; a++){
            console.log(`Alumno:  ${estudiante[i]}  Materia:  ${Materias[a]}  Calificacion:  ${calificaciones[i][a]} \n `);
        };
    };
}
Boleta();

console.log("Modificar Calificar calificaciones: \n")


