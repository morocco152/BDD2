/*
llamar al archivo de modelo
crear una clase para interactuar con el modelo

IdGasto INT  PRIMARY KEY,
Nombre_Gasto VARCHAR(20) NOT NULL,
Descripcion_Gasto VARCHAR(100) NOT NULL,
Fecha datetime NOT NULL,
ID_Sucursal INT NOT NULL

*/

const GastoModelo = require('../models/gastos');

class Gasto {

    static async obtenerGasto(){

        let {estado} = req.query;
        if (!estado){
            estado = 'normal'
        }
        const listaGastos = await GastoModelo.obtenerGasto();
        res.render('gastos', {listaGastos: listaGastos, estado, usuario: req.cookies.nombreusuario});

    }

    static async crearGasto(req, res){

        const {IdGasto, NombreGasto, DescripcionGasto, FechaGasto, IDSucursal} = req.body;
        console.log("DATOS PARA EL NUEVO Gasto:", req.body);
        const nuevoGasto = await GastoModelo.CrearGasto(IdGasto, NombreGasto, DescripcionGasto, FechaGasto, IDSucursal).catch(err => {
            console.log("Error crear Gasto");
            return res.redirect('/gasto');
        })

        console.log("Gasto creado: ", nuevoGasto);
        res.redirect('/gasto');

    } 

    static async deleteGasto(req, res){

        const {IdGasto} = req.params;
        console.log("Datos", req.params);
        const GastoBorrado = await GastoModelo.deleteGasto(idGasto).catch(err => {
            console.log("error al borrar ", err);
            return res.redirect('/gasto');
        });

        return res.redirect('/gasto');

    }

}

module.exports = Gasto;