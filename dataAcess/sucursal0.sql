-- Añadir id de sucursal --
**
create procedure addSucursal
	@ID_Sucursal int,
	@Nombre varchar(20),
	@Dirección varchar(50)
as 
	insert into SUCURSAL_FH0 values (@ID_Sucursal,@Nombre,@Dirección);
	insert into [DESKTOP-V566VCU\MSSQLSERVER01].[TiendaX].[dbo].SUCURSAL_FH0_R1 values (@ID_Sucursal,@Nombre,@Dirección);
go 

EXEC addSucursal @ID_Sucursal=1,@Nombre='Sucursal 0',@Dirección='Av. La Molina #503';
***

-- Añadir Gasto 
**
create procedure addGasto
    @IdGasto integer,
    @Nombre_Gasto varchar(20),
    @Descripcion_Gasto varchar(100),
    @Fecha datetime,
    @ID_Sucursal integer,
as 
insert into GASTO_FH0
values(@IdGasto, @Nombre_Gasto,@Descripcion_Gasto,@Fecha,@ID_Sucursal)
insert into [DESKTOP-V566VCU\MSSQLSERVER01].[TiendaX].[dbo].GASTO_FH0_R1
values(@IdGasto, @Nombre_Gasto,@Descripcion_Gasto,@Fecha,@ID_Sucursal
go

EXEC addGasto @IdGasto=1, @Nombre_Gasto='Luz',@Descripcion_Gasto'Pago del Servicio de Luz',@Fecha='10 julio, 2021',@ID_Sucursal=1;
**

-- añadir cliente
**
create procedure addCliente
    @IdCliente integer,
    @Nombre varchar(20),
    @Apellido varchar(20),
    @DNI varchar(8),
    @Direccion varchar(50),
    @Telefono varchar(20),
    @Email varchar(20),
    @ID_Sucursal integer
as 
insert into CLIENTE_FH0 values(@IdCliente, @Nombre,@Apellido,@DNI,@Direccion,@Telefono,@Email,@ID_Sucursal);
insert into [DESKTOP-V566VCU\MSSQLSERVER01].[TiendaX].[dbo].CLIENTE_FH0_R1 values(@IdCliente, @Nombre,@Apellido,@DNI,@Direccion,@Telefono,@Email,@ID_Sucursal);
go

EXEC addCliente @IdCliente=1, @Nombre='Maria',@Apellido='Perez',@DNI=77223264,@Direccion='Av. Lima #110',@Telefono='992222444',@Email='maria.perez@gmail.com',@ID_Sucursal=0;
**

-- add reserva 

**
create procedure addReserva
    @IdReserva int,
    @IdCliente int,
    @IdProducto int,
    @Fecha_Inicio datetime,
    @Fecha_Fin datetime,
    @Anticipo float,
    @Diferencia float,
    @Precio float
as 
insert into RESERVA_FH0
values(@IdReserva,@IdCliente,@IdProducto,@Fecha_Inicio,@Fecha_Fin,@Anticipo,@Diferencia,@Precio);
insert into [DESKTOP-V566VCU\MSSQLSERVER01].[TiendaX].[dbo].RESERVA_FH0_R1 
values(@IdReserva,@IdCliente,@IdProducto,@Fecha_Inicio,@Fecha_Fin,@Anticipo,@Diferencia,@Precio);
go

EXEC addReserva @IdReserva=1,@IdCliente=1,@IdProducto=1,@Fecha_Inicio= '1753-01-01',@Fecha_Fin='1753-01-01',@Anticipo=20,@Diferencia=30,@Precio=50;
**

-- ad empleado 

**
create procedure addEmpleado
    @IdEmpleado Int,
    @Nombre varchar(20),
    @Apellido varchar(20),
    @DNI varchar(8),
    @Direccion VARCHAR(30),
    @Telefono varchar(10),
    @Sueldo float,
    @Fecha datetime,
    @Hora_Entrada time,
    @Hora_Salida time,
    @Usuario varchar(20),
    @Contraseña varchar(20),
    @ID_Sucursal int
as 
insert into EMPLEADO_FH0 values(@IdEmpleado,@Nombre,@Apellido,@DNI,@Direccion,@Telefono,@Sueldo,@Fecha,@Hora_Entrada,@Hora_Salida,@Usuario,@Contraseña,@ID_Sucursal);
insert into [DESKTOP-V566VCU\MSSQLSERVER01].[TiendaX].[dbo].EMPLEADO_FH0_R1 values(@IdEmpleado,@Nombre,@Apellido,@DNI,@Direccion,@Telefono,@Sueldo,@Fecha,@Hora_Entrada,@Hora_Salida,@Usuario,@Contraseña,@ID_Sucursal);
EXEC addEmpleado @IdEmpleado = 1, @Nombre = 'Luis Angel', @Apellido =  'Moroco',@DNI = '72136587',@Direccion = 'Av. el Sol Ate',@Telefono = '943121239', @Sueldo = 999.99, @Fecha ='1753-01-01', @Hora_Entrada ='12:34:54' , @Hora_Salida ='12:34:54' , @Usuario = 'lmoroco@unsa.edu.pe' ,@Contraseña='MOROCCO153', @ID_Sucursal=0;
**

-- adVale 
**
create procedure addVale
    @IdVale int,
    @IdEmpleado int,
    @Descripcion varchar(50),
    @Descuento decimal(8,2),
    @Vigencia date
as 
    insert into VALE_FH0
    values(@IdVale,@IdEmpleado,@Descripcion,@Descuento,@Vigencia);
    insert into  [DESKTOP-V566VCU\MSSQLSERVER01].[TiendaX].[dbo].VALE_FH0_R1 
    values(@IdVale,@IdEmpleado,@Descripcion,@Descuento,@Vigencia);
go 
EXEC addVale  @IdVale=1,@IdEmpleado=1,@Descripcion='Descuento de 15% en compras mayores a 100 soles',@Descuento='15',@Vigencia='';
**

-- add proveedor 
**
create procedure addProveedor
    @IdProveedor int,
    @Razon_Social varchar(20),
    @Sector_Comercial varchar(20),
    @Tipo_Documento varchar(20),
    @Num_Documento varchar(20),
    @DNI varchar(8),
    @Direccion varchar(50),
    @Telefono varchar(20),
    @Email varchar(20),
    @ID_Sucursal int
as 
insert into PROVEEDOR_FH0 values(@IdProveedor,@Razon_Social,@Sector_Comercial,@Tipo_Documento,@Num_Documento,@DNI,@Direccion,@Telefono,@Email,@ID_Sucursal);
insert into [DESKTOP-V566VCU\MSSQLSERVER01].[TiendaX].[dbo].PROVEEDOR_FH0_R1 values(@IdProveedor,@Razon_Social,@Sector_Comercial,@Tipo_Documento,@Num_Documento,@DNI,@Direccion,@Telefono,@Email,@ID_Sucursal);
Go

EXEC addProveedor @IdProveedor = 1,@Razon_Social = 'Venta', @Sector_Comercial= 'Electrodomésticos', @Tipo_Documento= 'DNI',@Num_Documento = '1',@DNI = '72849375',@Direccion = 'Av. los geranios surco',@Telefono = '943127549',@Email='correo01@gmail.com',@ID_Sucursal=0;
**

-- addprodcuto 

**
create procedure addProducto
    @IdProducto int,
    @Nombre_Producto varchar(20),
    @Descripcion_Producto varchar(50),
    @Precio numeric(6,2),
    @Stock int,
    @Estado varchar(10)
as 
    insert into PRODUCTO_FH0 
    values(@IdProducto,@Nombre_Producto,@Descripcion_Producto,@Precio,@Stock,@Estado);
	insert into[DESKTOP-V566VCU\MSSQLSERVER01].[TiendaX].[dbo].PRODUCTO_FH0_R1 
    values(@IdProducto,@Nombre_Producto,@Descripcion_Producto,@Precio,@Stock,@Estado);
go

EXEC addProducto @IdProducto=1,@Nombre_Producto='Licuadora',@Descripcion_Producto='Electrodomestico para cocina ',@Precio=50,@Stock=100,@Estado='avaible';
**

-- adFactura 

**
create procedure addFactura
    @IdFactura int,
    @IdCliente int,
    @IdEmpleado int,
    @IdProducto int,
    @Fecha datetime,
    @TipoComprobante varchar(20),
    @Serie varchar(4),
    @Correlativo varchar(7),
    @IGV decimal(4,2),
    @ID_Sucursal int
as 
insert into FACTURA_FH0 values(@IdFactura,@IdCliente,@IdEmpleado,@IdProducto,@Fecha,@TipoComprobante,@Serie,@Correlativo,@IGV,@ID_Sucursal);
insert into [DESKTOP-V566VCU\MSSQLSERVER01].[TiendaX].[dbo].FACTURA_FH0_R1
values(@IdFactura,@IdCliente,@IdEmpleado,@IdProducto,@Fecha,@TipoComprobante,@Serie,@Correlativo,@IGV,@ID_Sucursal);
EXEC addFactura @IdFactura=1,@IdCliente=1,@IdEmpleado=1,@IdProducto=1,@Fecha='1753-01-01',@TipoComprobante='boleta de nota',@Serie='axgs',@Correlativo='gaa',@IGV=18.6,@ID_Sucursal=0;
**

-- add factura detalle 

**
create procedure addFacturaDetalle
    @IdFacturadetalle int,
    @IdFactura int,
    @Cantidad int,
    @PrecioVenta money,
    @Descuento money
as 
insert into FACTURA_DETALLE_FH0  values(@IdFacturadetalle,@IdFactura,@Cantidad,@PrecioVenta,@Descuento);
insert into [DESKTOP-V566VCU\MSSQLSERVER01].[TiendaX].[dbo].FACTURA_DETALLE_FH0_R1 values(@IdFacturadetalle,@IdFactura,@Cantidad,@PrecioVenta,@Descuento);
go
EXEC addFacturaDetalle @IdFacturadetalle=1,@IdFactura=1,@Cantidad=1,@PrecioVenta=50,@Descuento=0.1;
**

------------------------------------------------------- GET FX -----------------------------------------------

EXEC getClientes;
EXEC getFactura;
EXEC getGasto;
EXEC getProducto;
EXEC getReserva;
EXEC getVale;
EXEC getEmpleado;
EXEC validacion @usuario='20182013', @contraseña='20182913';

CREATE PROCEDURE getClientes 
AS    
   SET NOCOUNT ON;  
   SELECT * FROM CLIENTE_FH0;  
RETURN  
GO

CREATE PROCEDURE getFactura 
AS    
   SET NOCOUNT ON;  
   SELECT * FROM FACTURA_FH0;  
RETURN  
GO

CREATE PROCEDURE getGasto 
AS    
   SET NOCOUNT ON;  
   SELECT * FROM GASTO_FH0;  
RETURN  
GO

CREATE PROCEDURE getProducto 
AS    
   SET NOCOUNT ON;  
   SELECT * FROM PRODUCTO_FH0;  
RETURN  
GO

CREATE PROCEDURE getReserva
AS    
   SET NOCOUNT ON;  
   SELECT * FROM RESERVA_FH0;  
RETURN  
GO

CREATE PROCEDURE getVale
AS    
   SET NOCOUNT ON;  
   SELECT * FROM VALE_FH0;  
RETURN  
GO

CREATE PROCEDURE getEmpleado
AS    
   SET NOCOUNT ON;  
   SELECT * FROM EMPLEADO_FH0;  
RETURN  
GO

CREATE PROCEDURE validacion
	@usuario varchar(20),
	@contraseña varchar(20)

as 
begin 
	select COUNT(*) from EMPLEADO_FH0 where Usuario = @usuario and Contrasenia=@contraseña
end

CREATE PROCEDURE Authentication_worker 
    @usuario varchar(20),
    @contraseña varchar(20)

as 
begin 
    SET NOCOUNT ON;
    select * from EMPLEADO_FH0 where Usuario = @usuario and Contrasenia = @contraseña
end


