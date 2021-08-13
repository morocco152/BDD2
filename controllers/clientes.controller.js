/*
llamar al archivo de modelo
crear una clase para interactuar con el modelo
*/

const ClienteModelo = require('../models/clientes');

class Cliente {

    static async obtenerCliente(req, res){
        
        let {estado} = req.query;
        if (!estado){
            estado = 'normal'
        }
        const listaClientes = await ClienteModelo.obtenerCliente();
        res.render('clientes', {listaClientes: listaClientes, estado, usuario: req.cookies.nombreusuario});

    }

    static async crearCliente(req, res){
        
        const {IdCliente, Nombre, Apellido, DNI, Direccion, Telefono, Email, ID_Sucursal} = req.body;
        console.log("DATOS PARA EL NUEVO PRODUCTO:", req.body);
        const nuevoCliente = await ClienteModelo.crearCliente(IdCliente, Nombre, Apellido, DNI, Direccion, Telefono, Email, ID_Sucursal).catch(err => {
            console.log("Error crear Cliente");
            return res.redirect('/clientes');
        })

        console.log("Cliente creado: ", nuevoCliente);
        res.redirect('/clientes');
        
    }

    static async deleteCliente(req, res){

        const {idCliente} = req.params;
        console.log("Datos", req.params);
        const clienteBorrado = await ClienteModelo.deleteCliente(idCliente).catch(err => {
            console.log("error al borrar ", err);
            return res.redirect('/clientes');
        });

        return res.redirect('/clientes');

    }

}

module.exports = Cliente;