/*
llamar al archivo de modelo
crear una clase para interactuar con el modelo
*/

const ClienteModelo = require('../models/clientes');

class Cliente {

    static async logIn(req, res){
        
        const { usuario, clave, sucursal } = req.body;
        // despues de haber validado a nuestro usuario
        const datosCliente = await ClienteModelo.obtenerUsuario(usuario,clave);
       
        console.log("===>", datosCliente);

        if (datosCliente.length > 0) {

            if (clave === datosCliente[0].Contrasenia) {
                
                res.cookie('idusuario', datosCliente[0].IdEmpleado);
                res.cookie('nombreusuario', datosCliente[0].Nombre);
                res.cookie('Sucursal', datosCliente[0].ID_Sucursal);

                return res.redirect('/');
            }
        }

        return res.redirect('/ingresar?error=si');

    }
}

module.exports = Cliente;