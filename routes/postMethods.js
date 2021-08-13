const express = require('express');
const router = express.Router();

const ClienteController = require('../controllers/clientes.controller');
const TrabajadorController = require('../controllers/trabajadores.controller');
const ProductosController = require('../controllers/productos.controller');
const ValeController = require('../controllers/vales.controller');
const GastoController = require('../controllers/gastos.controller');

// AQUÍ IRAN NUESTROS MÉTODOS - POST

// trabajador
router.post('/ingresar', TrabajadorController.logIn);


// Producto
router.post('/productos', ProductosController.crearProducto);
router.post("/productos/editar/:idProducto", ProductosController.editarProducto);
router.post("/productos/actualizar/:idProducto", ProductosController.actualizarProducto);


// clientes
router.post('/clientes', ClienteController.crearCliente);

// vales
router.post('/vales', ValeController.crearVale);

// gastos
router.post('/gastos', GastoController.crearGasto);


module.exports = router;
