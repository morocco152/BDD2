/*
    obtener vales
    crear vales
    eliminar vales

    IdVale INT  PRIMARY KEY,
    IdEmpleado int NOT NULL,
    Descripcion varchar(50),
    Descuento decimal(8,2) not null,
    Vigencia date not null,
    
*/

const sql = require('msnodesqlv8');
const connection = require('../config/config');

class Vale {

    static crearVale(IdVale, IdEmpleado, Descripcion, Descuento, Vigencia){
        return new Promise((resolve, reject) => {
            sql.open(connection, function (err, conn) {
                var pm = conn.procedureMgr();
                pm.callproc('addVale',[IdVale, IdEmpleado, Descripcion, Descuento, Vigencia], function(err, results, output) {
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

    static obtenerVale(){
        return new Promise((resolve, reject) => {
            sql.open(connection, function (err, conn) {
                var pm = conn.procedureMgr();
                pm.callproc('getVale', function(err, results, output) {
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

    // falta gaa elimnar stored prpocedure
    
    static deleteVale(idVale){
        return new Promise((resolve, reject) => {
            sql.open(connection, function (err, conn) {
                var pm = conn.procedureMgr();
                pm.callproc('deleteCliente',[idVale] , function(err, results, output) {
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

module.exports = Vale;