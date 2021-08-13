//crearias la clase que interactura con la tabla clientes

/*
 crear cliente
 obtener cliente 
 eliminar cliente
*/

const sql = require('msnodesqlv8');
const connection = require('../config/config');

class Cliente {

    static crearCliente(IdCliente, Nombre, Apellido, DNI, Direccion, Telefono, Email, ID_Sucursal){
        return new Promise((resolve, reject) => {
            sql.open(connection, function (err, conn) {
                var pm = conn.procedureMgr();
                pm.callproc('addCliente',[IdCliente, Nombre, Apellido, DNI, Direccion, Telefono, Email, ID_Sucursal], function(err, results, output) {
                    if(err){
                      console.log(err);
                      return reject([]);
                    }else{
                        console.log("MODEL ==>", results);
                        return resolve(results);
                    }   
                })
            });
        });
    }

    static obtenerCliente(){
        return new Promise((resolve, reject) => {
            sql.open(connection, function (err, conn) {
                var pm = conn.procedureMgr();
                pm.callproc('getClientes', function(err, results, output) {
                    if(err){
                      console.log(err);
                      return reject([]);
                    }else{
                        console.log("MODEL ==>", results);
                        return resolve(results);
                    }   
                })
            });
        });
    }
    
    static deleteCliente(idCliente){
        return new Promise((resolve, reject) => {
            sql.open(connection, function (err, conn) {
                var pm = conn.procedureMgr();
                pm.callproc('deleteCliente',[idCliente] , function(err, results, output) {
                    if(err){
                      console.log(err);
                      return reject([]);
                    }else{
                        console.log("MODEL ==>", results);
                        resolve(results);
                    }   
                })
            });
        });
    }
    
}

module.exports = Cliente; 