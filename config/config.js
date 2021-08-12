// Conexión con la base de datos
//const sql = require('mssql/msnodesqlv8')
//msnodesqlv8 module is requiered for Windows Authentication without using Username and Password

/*const pool = new sql.ConnectionPool({
    database: 'TiendaX',
    server: 'DESKTOP-V566VCU',
    driver: 'msnodesqlv8',
    options: {
        trustedConnection: true
    }
});*/

//pool.connect().then(() => {
    //console.log("Conectado con exito");
    //simple query
    /*
    var queryString = 'select * from CLIENTE_FH0';
    pool.request().query(queryString, (err, result) => {
        if(err)
            console.log(err)
        else
            console.dir(result)
    });
    */
//});

//module.exports = pool;
