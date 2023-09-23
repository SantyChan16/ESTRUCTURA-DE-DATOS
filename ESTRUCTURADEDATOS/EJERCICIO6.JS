class Empleado {
    constructor(nombre,apellido,ID,cargo,salario) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.ID = ID;
        this.cargo = cargo;
        this.salario = salario;
    }

mostrarInformacion() {
        console.log(`El emplado se llama: ${this.nombre} ${this.apellido}, con el cargo ${this.cargo} y ID: ${this.ID} con el salario de ${this.salario}\n`);
    }
}
class Informacion {
    constructor(){
    this.plantilla = [];
    }

    agregar(nombre,apellido,ID,cargo,salario){
        const Info = new Empleado(nombre,apellido,ID,cargo,salario)
        this.plantilla.push(Info);
        console.log(`Se agrego al empleado ${Info.nombre} ${Info.apellido} con el ID ${Info.ID}, y cargo ${Info.cargo} que tiene un salario de ${Info.salario} \n`
        );
    }; 

    Listarplantilla() {
        this.plantilla.forEach((nombres, index) => {
        console.log(`Empleado ${index + 1}:`);
        nombres.mostrarInformacion();
        });
    }

    editar(ID,newnombre,newapellido,newID,newcargo,newsalario){
        const Info = this.plantilla.find(Info => Info.ID === ID)
        if(Info){
            Info.nombre = newnombre;
            Info.apellido = newapellido;
            Info.ID = newID;
            Info.cargo = newcargo;
            Info.salario = newsalario;
        console.log(`La Informacion del empleado ha sido modificada ${ID} \n`);
        }
    }

    eliminar(ID) {
        const i = this.plantilla.findIndex(empleado => empleado.ID === ID);
        if (i !== -1) {
            const eliminarEmpleado = this.plantilla.splice(i, 1)[0];
            console.log(`Se eliminó al empleado ${eliminarEmpleado.nombre} con el ID ${eliminarEmpleado.ID} del puesto ${eliminarEmpleado.cargo} \n`);
        }
    }
}


const Trabajdor = new Informacion();

Trabajdor.agregar("Angel","Gonzalez","010100","Chalan","$1,250");
Trabajdor.agregar("Carlos","Perez","0120588","Maestro","$1,452");
Trabajdor.agregar("Antonio","Juarez","455525","chalan","$2,544");
Trabajdor.agregar("Juan","Chale","448181","Chalan","$1,450");

Trabajdor.editar("455525","Pedro","Juarez","450480","Maestro","$2,544");
Trabajdor.Listarplantilla();

Trabajdor.eliminar("010100");

console.log("Se a actualizado la lista \n");

Trabajdor.Listarplantilla();
