let GetUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Fernando',
        id
    }

    if (id == 20) {
        callback('el usuario con id ' + id + ' no existe')
    } else {
        callback(null, usuario);
    }

}

GetUsuarioById(10, (err, usuario) => {
    if (err) {
        return console.log(err);
    }
    console.log('Usiario de bade de datos ', usuario);
})