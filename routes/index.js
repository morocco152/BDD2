const express = require('express');
const router = express.Router();

const ClienteController = require('../controllers/clientes.controller');

/* GET home page. */
router.get('/ventas', function(req, res, next) {
  res.render('venta');
});
router.get('/productos', function (req, res){
  res.render('venta');
});

router.get('/clientes', ClienteController.formularioCrearCliente);
router.post('/clientes', ClienteController.crearCliente);

router.get('/ingresar', function (req, res) {
  res.render('ingresar');
});
module.exports = router;
