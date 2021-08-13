// conexión al servidorm

const sql = require('msnodesqlv8'); 

// sucursal 0
const conn_str = "server=DESKTOP-V566VCU;Database=TiendaX;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";

// sucursal 1 
//const conn_str = "server=DESKTOP-V566VCU\MSSQLSERVER01;Database=TiendaX;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";

// sucursal 1 
//const conn_str = "server=DESKTOP-V566VCU\MSSQLSERVER02;Database=TiendaX;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";

module.exports = conn_str;
