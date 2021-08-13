const ProductoModelo = require('../models/productos');

class Producto {

    static async obtenerProductos(req, res){
        let {estado} = req.query;
        if (!estado){
            estado = 'normal'
        }
        const listaProductos = await ProductoModelo.obtenerProductos();

        res.render('productos', {listaProductos: listaProductos, estado, usuario: req.cookies.nombreusuario});
    }

    static async crearProducto(req, res){
        const {IdProducto, NombrePro, DescripcionProducto, PrecioProducto, StockProducto, EstadoProducto} = req.body;
        console.log("DATOS PARA EL NUEVO PRODUCTO:", req.body);
        const nuevoProducto = await ProductoModelo.crearProducto(IdProducto, NombrePro, DescripcionProducto, PrecioProducto, StockProducto, EstadoProducto).catch(err => {
            console.log("Error crear producto");
            return res.redirect('/productos?estado=errorCrear');
        });

        console.log("Nuevo Producto creado:", nuevoProducto);
        res.redirect('/productos?estado=productoCreado');
    }

    static async borrarProducto(req, res){
        const {idProducto} = req.params;

        console.log("DATOS", req.params);
        const productoBorrado = await ProductoModelo.deleteProducto(idProducto).catch(err => {
            console.log("Hay un error al borrar un producto", err);
            return res.redirect('/productos?estado=errorBorrar');
        });
        return res.redirect('/productos');
    }

    static async editarProducto(req, res){
        const { idProducto } = req.params;

        // Consulta SQL
        const info = {IdProducto: idProducto, nombreProducto: "Mesa", stockProducto: 233};

        return res.render('productos-editar', {estado: 'ok', datos: info,usuario: req.cookies.nombreusuario});
    }

    static async actualizarProducto(req, res){
        const { idProducto } = req.params;
        const {PrecioProducto,StockProducto} = req.body;

        // Comando SQL para editar

        return res.redirect('/productos?estado=actualizadoOk');
    }

}

module.exports = Producto;