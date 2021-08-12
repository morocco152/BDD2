//crearias la clase que interactura con la tabla clientes


/*
 crear cliente
 editar clietne
 obtener clientes
 obtener por id
 obtener por nombre
 obtener cliente por dni
 */

// const connection = require('../config/config');

class Cliente {
    static obtenerUsuario(usuario){

        // consulta con SQL -> SELECT * FROM usarios WHERE usuario='usuario'
        /*
        connection.request().query("SELECT * FROM usuarios WHERE usuario=" + usuario, (err, result) => {
            if (err){
                console.log("Error al consultar por un usuario");
            } else {
                return result;
            }
        });
        */

        if (usuario === "armando"){
            return [{
                usuario: 'armando',
                idusuario: 28,
                clave: '123456'
            }];
        }
        return [];

    }
}

module.exports = Cliente;