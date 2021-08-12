const express = require('express');
const router = express.Router();


const ClienteController = require('../controllers/clientes.controller'); 
const FacturasController = require('../controllers/facturas.controller');
const GastosController = require('../controllers/gastos.controller'); 
const ProductosController = require('../controllers/productos.controller');
const ReservaController = require('../controllers/reserva.controller'); 
const ValesController = require('../controllers/vales.controller');
const VentaController = require('../controllers/venta.controller');


/* GET home page. */
router.get('/ventas', function(req, res, next) {
  res.render('venta');
});

router.get('/', function (req, res){ //productos
  console.log("Ingresando a panel:", req.cookies.idusuario);
  res.render('dashboard');
});

router.get('/vales', function (req, res){
  res.render('vales');
});

router.get('/productos', function (req, res){
  res.render('productos');
});

router.get('/facturas', function (req, res){
  res.render('facturas');
});

router.get('/gasto', function (req, res){
  res.render('gastos');
});

router.get('/reserva', function (req, res){
  res.render('reserva');
});




//index 
router.get('/', function(req, res, next) {
  res.send('indexm');
});





router.get('/clientes', ClienteController.formularioCrearCliente);
router.post('/clientes', ClienteController.crearCliente);



router.get('/ingresar', function (req, res) {
  console.log("INGRESANDO MEDIANTE GET", req.query);
  res.render('ingresar', { error: req.query.error === "si"? "si":"no" });
});

module.exports = router;
