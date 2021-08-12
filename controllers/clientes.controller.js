/*
llamar al archivo de modelo
crear una clase para interactuar con el modelo
*/

const ClienteModelo = require('../models/clientes');

class Cliente {

    static formularioCrearCliente(req, res){
        res.render('clientes');
    }

    static crearCliente(req, res){
        res.send("Cliente creado" + JSON.stringify(req.body));
    }

    static logIn(req, res){
        const { usuario, clave, sucursal } = req.body;
        // despues de haber validado a nuestro usuario
        const datosCliente = ClienteModelo.obtenerUsuario(usuario);

        if (datosCliente.length > 0) {
            if (clave === datosCliente[0].clave) {
                res.cookie('idusuario', datosCliente[0].idusuario);
                res.cookie('nombreusuario', datosCliente[0].usuario);

                return res.redirect('/');
            }
        }

        return res.redirect('/ingresar?error=si');

    }
}

module.exports = Cliente;