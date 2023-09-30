class PilaLimitada {
    constructor() {
    this.Mipila = [];
}

agregar(elemento) {
    let limite = this.Mipila.length;
    if (limite < 3) {
        this.Mipila.push(elemento);
        console.log(`Se agrego a la pila el siguiente elemento ${elemento}`)
} else {
        console.log("La pila está llena no se puede ingresar mas elementos");
}
}

pop() {
    console.log(`Se eliminó el último elemento ${this.Mipila.pop()}`);
}

peek() {
    console.log(`El último elemento es ${this.Mipila[this.Mipila.length - 1]}`);
}
}

let Pilas = new PilaLimitada();

Pilas.agregar("A");
Pilas.agregar("B");
Pilas.agregar("C");
Pilas.agregar("D"); 

Pilas.pop(); 
Pilas.agregar("D");

Pilas.peek(); 

