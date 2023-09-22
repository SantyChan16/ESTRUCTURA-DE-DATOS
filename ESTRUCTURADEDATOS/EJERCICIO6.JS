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
        console.log(`Se agrego al empleado ${Info.nombre}${Info.apellido} con el ID ${Info.ID}, y cargo ${Info.cargo} que tiene un salario de ${Info.salario} \n`
        );
    }; 

    Listarplantilla() {
        this.Info.forEach((nombres, index) => {
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
        console.log(`La Informacion del empleado ha sido modificada ${nombre} \n`);
        }
    }




}