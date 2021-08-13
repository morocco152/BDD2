CREATE DATABASE TiendaX;
USE TiendaX;

--TABLA SUCURSAL
CREATE TABLE SUCURSAL_FH1
(
ID_Sucursal INT PRIMARY KEY,
Nombre VARCHAR (20) NOT NULL,
Direccion VARCHAR (50) NOT NULL
)
GO

--TABLE PRODUCTO
CREATE TABLE PRODUCTO_FH1
(
IdProducto INT PRIMARY KEY,
Nombre_Producto VARCHAR(20) NOT NULL,
Descripcion_Producto VARCHAR(50) NOT NULL,
Precio numeric(6,2) NOT NULL,
Stock int NOT NULL,
Estado VARCHAR(10) NOT NULL
)
GO

--TABLA GASTO
CREATE TABLE GASTO_FH1
(
IdGasto INT PRIMARY KEY,
Nombre_Gasto VARCHAR(20) NOT NULL,
Descripcion_Gasto VARCHAR(100) NOT NULL,
Fecha datetime NOT NULL,
ID_Sucursal INT NOT NULL,
CONSTRAINT PK_GASTO_SUCURSAL foreign key(ID_Sucursal) references SUCURSAL_FH1(ID_Sucursal)
)
GO

--TABLA CLIENTE
CREATE TABLE CLIENTE_FH1
(
IdCliente INT PRIMARY KEY,
Nombre VARCHAR (20) NOT NULL,
Apellido VARCHAR (20) NULL,
DNI VARCHAR(8) NOT NULL,
Direccion varchar(50) not null,
Telefono VARCHAR (20) NULL,
Email VARCHAR (20) NULL,
ID_Sucursal INT NOT NULL,
CONSTRAINT PK_CLIENTE_SUCURSAL foreign key(ID_Sucursal) references SUCURSAL_FH1(ID_Sucursal)
)
GO

--TABLA RESERVA
CREATE TABLE RESERVA_FH1
(
IdReserva INT PRIMARY KEY,
IdCliente INT NOT NULL,
IdProducto int not null,
Fecha_Inicio dateTIME NOT NULL,
Fecha_Fin dateTIME NOT NULL,
Anticipo FLOAT NOT NULL,
Diferencia float not null,
Precio FLOAT NOT NULL,
CONSTRAINT PK_RESERVA_CLIENTE FOREIGN KEY (IdCliente) references CLIENTE_FH1(IdCliente),
CONSTRAINT PK_RESERVA_PRODUCTO FOREIGN KEY (IdProducto) references PRODUCTO_FH1(IdProducto)
)
GO

--TABLA EMPLEADO
CREATE TABLE EMPLEADO_FH1
(
IdEmpleado  INT PRIMARY KEY,
Nombre VARCHAR(20) NOT NULL,
Apellido VARCHAR(20) NOT NULL,
DNI VARCHAR(8) NOT NULL,
Direccion VARCHAR(30),
Telefono VARCHAR(10) NOT NULL,
Sueldo FLOAT NOT NULL,
Fecha datetime not null,
Hora_Entrada TIME NOT NULL,
Hora_Salida TIME NOT NULL,
Usuario varchar(20),
Contraseña varchar(20),
ID_Sucursal INT NOT NULL,
CONSTRAINT PK_EMPLEADO_SUCURSAL foreign key(ID_Sucursal) references SUCURSAL_FH1(ID_Sucursal)
)
GO

--TABLA VALE
CREATE TABLE VALE_FH1
(
IdVale INT PRIMARY KEY,
IdEmpleado int NOT NULL,
Descripcion varchar(50),
Descuento decimal(8,2) not null,
Vigencia date not null,
CONSTRAINT PK_VALE_EMPLEADO foreign key(IdEmpleado) references EMPLEADO_FH1(IdEmpleado)
)
GO

--TABLA PROVEEDOR
CREATE TABLE PROVEEDOR_FH1
(
IdProveedor INT PRIMARY KEY,
Razon_Social VARCHAR (20) NOT NULL,
Sector_Comercial VARCHAR (20) NULL,
Tipo_Documento varchar(20) not null,
Num_Documento varchar(20) not null,
DNI VARCHAR(8) NOT NULL,
Direccion varchar(50) not null,
Telefono VARCHAR (20) NULL,
Email VARCHAR (20) NULL,
ID_Sucursal INT NOT NULL,
CONSTRAINT PK_PROVEEDOR_SUCURSAL foreign key(ID_Sucursal) references SUCURSAL_FH1(ID_Sucursal)
)
GO


--TABLA FACTURA
CREATE TABLE FACTURA_FH1
(
IdFactura INT primary key, 
IdCliente INT NOT NULL,
IdEmpleado int NOT NULL,
IdProducto int not null,
Fecha DATETIME,
TipoComprobante varchar(20),
Serie varchar(4) not null,
Correlativo varchar(7) not null,
IGV decimal(4,2),
ID_Sucursal INT NOT NULL,
CONSTRAINT PK_FACTURA_SUCURSAL foreign key(ID_Sucursal) references SUCURSAL_FH1(ID_Sucursal),
CONSTRAINT PK_FACTURA_CLIENTE FOREIGN KEY (IdCliente) references CLIENTE_FH1(IdCliente),
CONSTRAINT PK_FACTURA_EMPLEADO FOREIGN KEY (IdProducto) references EMPLEADO_FH1(IdEmpleado),
CONSTRAINT PK_FACTURA_PRODUCTO FOREIGN KEY (IdProducto) references PRODUCTO_FH1(IdProducto)
)
GO

--TABLA FACTURA DETALLE
CREATE TABLE FACTURA_DETALLE_FH1
(
IdFacturadetalle INT primary key, 
IdFactura INT not null, 
Cantidad int not null,
PrecioVenta money,
Descuento money,
CONSTRAINT PK_FACTURA_DETALLE_FACTURA FOREIGN KEY (IdFactura) references FACTURA_FH1(IdFactura)
)
GO

--Réplica de la Sucursal 0 en 1

--TABLA SUCURSAL
CREATE TABLE SUCURSAL_FH0_R1
(
ID_Sucursal INT PRIMARY KEY,
Nombre VARCHAR (20) NOT NULL,
Direccion VARCHAR (50) NOT NULL
)
GO

--TABLA GASTO
CREATE TABLE GASTO_FH0_R1
(
IdGasto INT PRIMARY KEY,
Nombre_Gasto VARCHAR(20) NOT NULL,
Descripcion_Gasto VARCHAR(100) NOT NULL,
Fecha datetime NOT NULL,
ID_Sucursal INT NOT NULL
)
GO

--TABLA CLIENTE
CREATE TABLE CLIENTE_FH0_R1
(
IdCliente INT PRIMARY KEY,
Nombre VARCHAR (20) NOT NULL,
Apellido VARCHAR (20) NULL,
DNI VARCHAR(8) NOT NULL,
Direccion varchar(50) not null,
Telefono VARCHAR (20) NULL,
Email VARCHAR (20) NULL,
ID_Sucursal INT NOT NULL
)
GO

--TABLA RESERVA
CREATE TABLE RESERVA_FH0_R1
(
IdReserva INT PRIMARY KEY,
IdCliente INT NOT NULL,
IdProducto int not null,
Fecha_Inicio dateTIME NOT NULL,
Fecha_Fin dateTIME NOT NULL,
Anticipo FLOAT NOT NULL,
Diferencia float not null,
Precio FLOAT NOT NULL,
)
GO

--TABLA EMPLEADO
CREATE TABLE EMPLEADO_FH0_R1
(
IdEmpleado  INT PRIMARY KEY,
Nombre VARCHAR(20) NOT NULL,
Apellido VARCHAR(20) NOT NULL,
DNI VARCHAR(8) NOT NULL,
Direccion VARCHAR(30),
Telefono VARCHAR(10) NOT NULL,
Sueldo FLOAT NOT NULL,
Fecha datetime not null,
Hora_Entrada TIME NOT NULL,
Hora_Salida TIME NOT NULL,
Usuario varchar(20),
Contraseña varchar(20),
ID_Sucursal INT NOT NULL,
)
GO

--TABLA VALE
CREATE TABLE VALE_FH0_R1
(
IdVale INT PRIMARY KEY,
IdEmpleado int NOT NULL,
Descripcion varchar(50),
Descuento decimal(8,2) not null,
Vigencia date not null,
)
GO

--TABLA PROVEEDOR
CREATE TABLE PROVEEDOR_FH0_R1
(
IdProveedor INT PRIMARY KEY,
Razon_Social VARCHAR (20) NOT NULL,
Sector_Comercial VARCHAR (20) NULL,
Tipo_Documento varchar(20) not null,
Num_Documento varchar(20) not null,
DNI VARCHAR(8) NOT NULL,
Direccion varchar(50) not null,
Telefono VARCHAR (20) NULL,
Email VARCHAR (20) NULL,
IdTienda INT NOT NULL
)
GO

--TABLE PRODUCTO
CREATE TABLE PRODUCTO_FH0_R1
(
IdProducto INT PRIMARY KEY,
Nombre_Producto VARCHAR(20) NOT NULL,
Descripcion_Producto VARCHAR(50) NOT NULL,
Precio numeric(6,2) NOT NULL,
Stock int NOT NULL,
Estado VARCHAR(10) NOT NULL,
)
GO

--TABLA FACTURA
CREATE TABLE FACTURA_FH0_R1
(
IdFactura INT primary key, 
IdCliente INT NOT NULL,
IdEmpleado int NOT NULL,
IdProducto int not null,
Fecha DATETIME,
TipoComprobante varchar(20),
Serie varchar(4) not null,
Correlativo varchar(7) not null,
IGV decimal(4,2),
ID_Sucursal INT NOT NULL,
)
GO

--TABLA FACTURA DETALLE
CREATE TABLE FACTURA_DETALLE_FH0_R1
(
IdFacturadetalle INT primary key, 
IdFactura INT not null, 
Cantidad int not null,
PrecioVenta money,
Descuento money
)
GO
