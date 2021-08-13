const express = require('express');
const router = express.Router();

const ClienteController = require('../controllers/clientes.controller');
const ProductosController = require('../controllers/productos.controller');

// AQUÍ IRAN NUESTROS MÉTODOS - POST
router.post('/ingresar', ClienteController.logIn);
router.post('/productos', ProductosController.crearProducto);
router.post("/productos/editar/:idProducto", ProductosController.editarProducto);
router.post("/productos/actualizar/:idProducto", ProductosController.actualizarProducto);

module.exports = router;
