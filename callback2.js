let empleados = [{
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Melisa'
    },
    {
        id: 3,
        nombre: 'Juan'
    }
]

let salairos = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
]

let getEmplado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id == id);
    if (!empleadoDB) {
        callback(`No existe un empleado con ID ${id}`);
    } else {
        callback(null, empleadoDB);
    }
}



let getSalario = (id, callback) => {
        let empleadoDB = empleados.find(empleado => empleado.id == id);
        if (!empleadoDB) {
            callback(`No existe un empleado con ID ${id}`);
        } else {
            let salarioDB = salairos.find(salario => salario.id == id);
            if (!salarioDB) {
                callback(null, `No existe salario par el empleado ${empleadoDB.nombre}`);
            } else {
                callback(null, { empleadoDB, salarioDB });
            }
        }
    }
    /*
    getEmplado(3, (err, empleado) => {

        if (err) {
            return console.log(err);
        }
        console.log(empleado);


    })
    */
getSalario(1, (err, empleado) => {

    if (err) {
        return console.log(err);
    }
    console.log(empleado);


})