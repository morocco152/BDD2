/*
    crear reserva
    obtener reservas
    delete reservas 
*/

// const connection = require('../config/config');

class Reserva {

    static crearReserva() {
        
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

    static obtenerReserva() {}

    static deleteReserva() {}

}

module.exports = Reserva;