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


let getEmplado = (id) => {

    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id == id);
        if (!empleadoDB) {
            reject(`No existe un empleado con ID ${id}`);
        } else {
            resolve(empleadoDB);
        }
    })
}

getEmplado(10).then(empleado => {
    console.log('Empleado de BS ', empleado);
}, err => console.log(err));