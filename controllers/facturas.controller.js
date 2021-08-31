/*
llamar al archivo de modelo
crear una clase para interactuar con el modelo
 */

const FacturaModelo = require('../models/facturas');

class Factura {

    static async obtenerFacturas(req, res){

        let {estado} = req.query;
        if (!estado){
            estado = 'normal'
        }
        const listaFacturas = await FacturaModelo.obtenerFacturas();
        console.log('retorna las facturas');

        // rendering the results vector 
        res.render('facturas', {listaFacturas: listaFacturas, estado, usuario: req.cookies.nombreusuario});

    }

}

module.exports = Factura;