/*
llamar al archivo de modelo
crear una clase para interactuar con el modelo
*/

const TrabajadorModelo = require('../models/trabajadores');

class Trabajador {

    static async logIn(req, res){
        
        const { usuario, clave, sucursal } = req.body;
        // despues de haber validado a nuestro usuario
        const datosTrabajador = await TrabajadorModelo.obtenerUsuario(usuario,clave);
       
        console.log("===>", datosTrabajador);

        if (datosTrabajador.length > 0) {

            if (clave === datosTrabajador[0].Contrasenia) {
                
                res.cookie('idusuario', datosTrabajador[0].idEmpleado);
                res.cookie('nombreusuario', datosTrabajador[0].Nombre);
                res.cookie('Sucursal', datosTrabajador[0].ID_Sucursal);

                return res.redirect('/');
            }
        }

        return res.redirect('/ingresar?error=si');

    }
}

module.exports = Trabajador;