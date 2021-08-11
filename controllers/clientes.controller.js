/*
llamar al archivo de modelo

crear una clase para interactuar con el modelo

 */

class Cliente{

    static formularioCrearCliente(req, res){
        res.render('clientes');
    }

    static crearCliente(req, res){
        res.send("Cliente creado" + JSON.stringify(req.body));
    }
}

module.exports = Cliente