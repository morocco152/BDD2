//crearias la clase que interactura con la tabla clientes

/*
 crear cliente
 obtener cliente 
*/

const sql = require('msnodesqlv8');
const connection = require('../config/config');

class Trabajador {

    static obtenerUsuario(usuario,clave){
        return new Promise((resolve, reject) => {
            sql.open(connection, function (err, conn) {
                var pm = conn.procedureMgr();
                pm.callproc('authentication_worker',[usuario,clave], function(err, results, output) {
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

}

module.exports = Trabajador;