/*
    crear venta

IdFactura INT  primary key, 
IdCliente INT NOT NULL,
IdEmpleado int NOT NULL,
IdProducto int not null,
Fecha DATETIME,
TipoComprobante varchar(20),
Serie varchar(4) not null,
Correlativo varchar(7) not null,
IGV decimal(4,2),
ID_Sucursal INT NOT NULL,


IdFacturadetalle INT  primary key, 
IdFactura INT not null, 
Cantidad int not null,
PrecioVenta money,
Descuento money,

    */


// const connection = require('../config/config');

class Venta {

    static crearVenta(datosCabecera, datosDetalle) {
        let {
            IdFactura,
            IdCliente,
            IdEmpleado,
            IdProducto,
            Fecha,
            TipoComprobante,
            Serie,
            Correlativo,
            IGV,
            ID_Sucursal,
        } = datosCabecera;

        let {
            IdFacturadetalle,
            IdFacturaCabecera,
            Cantidad,
            PrecioVenta,
            Descuento,
        } = datosDetalle;

        return new Promise((resolve, reject) => {
            sql.open(connection, function (err, conn) {
                var pm = conn.procedureMgr();
                pm.callproc('guardarCabecera',[IdFactura,
                    IdCliente,
                    IdEmpleado,
                    IdProducto,
                    Fecha,
                    TipoComprobante,
                    Serie,
                    Correlativo,
                    IGV,
                    ID_Sucursal],function(err, results, output) {
                    if(err){
                      console.log(err);
                      return reject([]);
                    }else{
                        var pm = conn.procedureMgr();
                        pm.callproc('guardarDetalle',[IdFacturadetalle,
                            IdFacturaCabecera,
                            Cantidad,
                            PrecioVenta,
                            Descuento],function(err, results, output) {
                            if(err){
                            console.log(err);
                            return reject([]);
                            }else{
                                console.log("MODEL ==>", results);
                                resolve(results[0]);
                            }   
                        })
                        resolve({stado: 'ok'});
                    }   
                })
            });
        });


    }

}

module.exports = Venta;