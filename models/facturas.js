// importamos la libreias 

/*
    obtener factura 
*/

const sql = require('msnodesqlv8');
const connection = require('../config/config');

class Factura {
    
    static  obtenerFacturas() { 

        return new Promise((resolve, reject) => {

            sql.open(connection, function (err, conn) {
                var pm = conn.procedureMgr();
                pm.callproc('getFactura', function(err, results, output) {
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

module.exports = Factura;