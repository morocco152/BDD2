const express = require('express');
const router = express.Router();

const ClienteController = require('../controllers/clientes.controller');
const ProductosController = require('../controllers/productos.controller');
const ValeController = require('../controllers/vales.controller');
const GastoController = require('../controllers/gastos.controller');

const Autenticar = require('../middlewares/autenticar');

// AQUÍ IRAN NUESTROS MÉTODOS - DELETE
router.get('/productos/:idProducto', Autenticar.autenticar, ProductosController.borrarProducto);
router.get('/clientes/:idCliente', Autenticar.autenticar, ClienteController.deleteCliente);
router.get('/vales/:idVale', Autenticar.autenticar, ValeController.deleteVale);
router.get('/gastos/:idGasto',  Autenticar.autenticar, GastoController.deleteGasto);



module.exports = router;
