//! SUMA

const suma = (arg1,arg2) => {

    let num1 = arg1;
    let num2 = arg2;

    let resultado = num1 + num2;
    console.log(`la suma es ${resultado}`);
};

//! RESTA

const resta = (arg1,arg2) => {

    let num1 = arg1;
    let num2 = arg2;

    let resultado = num1 - num2;
    console.log(`la resta es ${resultado}`);
};

//! MULTIPLICACION

const multiplicacion = (arg1,arg2) => {

    let num1 = arg1;
    let num2 = arg2;

    let resultado = num1 * num2;
    console.log(`la multiplicacion es ${resultado}`);
};

//! DIVICION

const divicion = (arg1,arg2) => {

    let num1 = arg1;
    let num2 = arg2;

    let resultado = num1 / num2;
    console.log(`la divicion es ${resultado}`);
};
const operaciones = (par1,par2,operacion) => {
    switch (operacion) {
        case "suma":
            suma(par1,par2);   
            break;
        case "resta":
            resta(par1,par2);
            break;
        case "multiplicacion":
            multiplicacion(par1,par2);
            break;
        case "divicion":
            divicion(par1,par2);
        default:
            console.log("Solo puedes usar la palabara suma o resta")
            break;
    }

}
operaciones(10,23,"suma");
operaciones(23,10,"resta");
operaciones(10,2,"multiplicacion");
operaciones(100,5,"divicion");