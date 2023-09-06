let texto = [
["H"],["o"],["l"],["a"]
];


const cadena = () => {
    let mensaje = "";
    for (let i = 0; i <= texto.length - 1; i++){
        mensaje = mensaje + texto[i];
    }
    console.log(mensaje);
}

const agregar = (ultima) => { 
    texto.push([ultima]);
}

const eliminar = (posicion) => {
    texto.splice(posicion, 1)
}

const editar = (ultima, posicion) => {
    let i = parseInt(posicion);
    let j = 0;
    
    texto[i][0] = ultima;
}


agregar("!");
cadena();
eliminar(3);
cadena();
editar("a", 3);
cadena();
