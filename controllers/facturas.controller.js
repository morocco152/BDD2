/*
llamar al archivo de modelo
crear una clase para interactuar con el modelo
 */

const FacturaModelo = require('../models/facturas');

class Factura {

    static async obtenerFacturas(){

        let {estado} = req.query;
        if (!estado){
            estado = 'normal'
        }
        const listaFacturas = await FacturaModelo.obtenerFacturas();
        res.render('facturas', {listaFacturas: listaFacturas, estado, usuario: req.cookies.nombreusuario});

    }

}

module.exports = Factura;