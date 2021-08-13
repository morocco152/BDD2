const sql = require('msnodesqlv8');
const connection = require('../config/config');

// select * from PRODUCTO_FH0;

class Producto {

    static crearProducto(idProducto, nombreProducto, descripcionProducto, precio, stock, estado) {
        return new Promise((resolve, reject) => {
            sql.open(connection, function (err, conn) {
                var pm = conn.procedureMgr();
                pm.callproc('addProducto',[idProducto, nombreProducto, descripcionProducto, precio, stock, estado],function(err, results, output) {
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

    static obtenerProductos(){
        return new Promise((resolve, reject) => {
            sql.open(connection, function (err, conn) {
                var pm = conn.procedureMgr();
                pm.callproc('getProducto', function(err, results, output) {
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

    static EliminarProducto(){
        return new Promise((resolve, reject) => {
            sql.open(connection, function (err, conn) {
                var pm = conn.procedureMgr();
                pm.callproc('getProducto', function(err, results, output) {
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



    static deleteProducto(idProducto) {
        const query = "DELETE FROM PRODUCTO_FH0 WHERE idProducto=" + idProducto;
        return new Promise((resolve, reject) => {
            sql.query(connection, query, (err, rows) => {
                if (err){
                    console.log("Error al borrar un producto", err);
                    return reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

}

module.exports = Producto;