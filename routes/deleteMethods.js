const express = require('express');
const router = express.Router();

const ClienteController = require('../controllers/clientes.controller');
const ProductosController = require('../controllers/productos.controller');

const Autenticar = require('../middlewares/autenticar');


// AQUÍ IRAN NUESTROS MÉTODOS - DELETE
router.get('/productos/:idProducto', Autenticar.autenticar, ProductosController.borrarProducto);


module.exports = router;
