/*
llamar al archivo de modelo
crear una clase para interactuar con el modelo
*/

const ValeModelo = require('../models/vales');

class Vale {

    static async obtenerVale(req, res){
        
        let {estado} = req.query;
        if (!estado){
            estado = 'normal'
        }
        const listaVales = await ValeModelo.obtenerVale();
        res.render('vales', {listaVales: listaVales, estado, usuario: req.cookies.nombreusuario});

    }

    static async crearVale(req, res){
        
        const {IdVale, IdEmpleado, Descripcionvale,DescuentoVale, VigenciaVale} = req.body;
        console.log("DATOS PARA EL NUEVO vale:", req.body);
        const nuevoVale = await ValeModelo.crearVale(IdVale, IdEmpleado, Descripcionvale,DescuentoVale, VigenciaVale).catch(err => {
            console.log("Error crear vale");
            return res.redirect('/vales');
        })

        console.log("vale creado: ", nuevoCliente);
        res.redirect('/vales');
    }


    static async deleteVale(req, res){

        const {IdVale} = req.params;
        console.log("Datos", req.params);
        const ValeBorrado = await ValeModelo.deleteVale(idVale).catch(err => {
            console.log("error al borrar ", err);
            return res.redirect('/vales');
        });

        return res.redirect('/vales');

    }

}

module.exports = Vale;