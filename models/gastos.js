/*
    crear gasto
    obtener gasto
    eliminar gasto

    IdGasto INT  PRIMARY KEY,
    Nombre_Gasto VARCHAR(20) NOT NULL,
    Descripcion_Gasto VARCHAR(100) NOT NULL,
    Fecha datetime NOT NULL,
    ID_Sucursal INT NOT NULL

*/

const sql = require('msnodesqlv8');
const connection = require('../config/config');

class Gasto {
    
    static CrearGasto(IdGasto, NombreGasto, DescripcionGasto, FechaGasto, IDSucursal) {

        return new Promise((resolve, reject) => {

            sql.open(connection, function (err, conn) {
                var pm = conn.procedureMgr();
                pm.callproc('addGasto',[IdGasto, NombreGasto, DescripcionGasto, FechaGasto, IDSucursal], function(err, results, output) {
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

    static ObtenerGasto() {

        return new Promise((resolve, reject) => {

            sql.open(connection, function (err, conn) {
                var pm = conn.procedureMgr();
                pm.callproc('getGasto', function(err, results, output) {
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
    
    static deleteGasto(idGasto) {

        return new Promise((resolve, reject) => {

            sql.open(connection, function (err, conn) {
                var pm = conn.procedureMgr();
                pm.callproc('deleteGasto',[idGasto] , function(err, results, output) {
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

module.exports = Gasto;