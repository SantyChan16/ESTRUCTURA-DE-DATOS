const nombres=["juan", "pedro"];
const numeros=["784-815-4848", '788-847-5447'];

const agregar = (nombre,numero) => {
    nombres.push(nombre);
    numeros.push(numero);
};
const editar = (nombre,numero) =>{
    let pos = nombres.indexOf(nombre);
    nombres[pos] = nombre;
    numeros[pos] = numero;
};
const eliminar = () =>{
    let pos = nombres.indexOf(nombres);
    nombres.splice(pos, 2);
    numeros.splice(pos, 2);
};
const contactos = () => {
    for (let i = 0; i <= nombres.length - 1; i++){
        console.log(`Nombre : ${nombres[i]}, Numero: ${numeros[i]}`);
    }
}

const agenda = (opciones,nombre,numero) =>{
    console.log("Selecciones accion a realizar en la agenda: ");
    console.log("1.- Agregar contacto")
    console.log("2.- Editar contacto")
    console.log("3.- Eliminar contacto")

    let eleccion = opciones;

    switch(eleccion){
        case "1":
            agregar(nombre,numero);
            break;
        case "2":
            editar(nombre,numero);
            break;
        case "3":
            eliminar(nombre,numero);
            break;
        default:
            console.log("El numero que selecciono no se encuentra en las opciones, ingreso una opccion")
    }
};
agenda("1","Enrique","998-335-2665");
console.log("=====================================================");
console.log("Se ha añadido un contacto a la agenda");
contactos();
console.log("=====================================================");
agenda("1","Irbing","998-1865-680");
console.log("=====================================================");
console.log("Se ha añadido un contacto a la agenda");
contactos();
console.log("=====================================================");
agenda("1","Armando","998-148-7166");
console.log("=====================================================");
console.log("Se ha añadido un contacto a la agenda");
contactos();
console.log("=====================================================");
agenda("2","Enrique Javier","274-115-5808");
console.log("=====================================================");
console.log("Se ha editado un contacto de la agenda");
contactos();
console.log("=====================================================");
agenda("3","Enrique Javier","274-115-5808");
console.log("Se ha eliminado un contacto de la agenda");
contactos();