const express = require('express');
const router = express.Router();

const Autenticar = require('../middlewares/autenticar');

const TrabajadorController = require('../controllers/trabajadores.controller'); 
const ClienteController = require('../controllers/clientes.controller'); 
const FacturasController = require('../controllers/facturas.controller');
const GastosController = require('../controllers/gastos.controller'); 
const ProductosController = require('../controllers/productos.controller');
const ReservaController = require('../controllers/reserva.controller'); 
const ValesController = require('../controllers/vales.controller');
const VentaController = require('../controllers/venta.controller');


/* GET home page. */
router.get('/ventas', function(req, res, next) {
  res.render('venta', {usuario: req.cookies.nombreusuario});
});

router.get('/', Autenticar.autenticar, function (req, res){ //productos
  console.log("Ingresando a panel:", req.cookies.idusuario);
  res.render('dashboard', {usuario: req.cookies.nombreusuario});
});

router.get('/productos', ProductosController.obtenerProductos);
router.get('/unproducto/:idProducto', ProductosController.obtenerUnProducto);
router.get('/productos/lista', ProductosController.obtenerProductosLista);
router.get('/clientes', ClienteController.obtenerCliente);
router.get('/vales', ValesController.obtenerVale);
router.get('/gasto', GastosController.obtenerGasto);
router.get('/facturas', FacturasController.obtenerFacturas);

/*
router.get('/facturas', function (req, res){
  res.render('facturas', {usuario: req.cookies.nombreusuario});
});


router.get('/gasto', function (req, res){
  res.render('gastos', {usuario: req.cookies.nombreusuario});
});

router.get('/reserva', function (req, res){
  res.render('reserva', {usuario: req.cookies.nombreusuario});
});

router.get('/clientes', function (req, res){
  res.render('clientes', {usuario: req.cookies.nombreusuario});
});


//index 
router.get('/', Autenticar.autenticar, function(req, res, next) {
  res.send('indexm');
});

*/

router.get('/ingresar', function (req, res) {
  console.log("INGRESANDO MEDIANTE GET", req.query);
  res.render('ingresar', { error: req.query.error === "si"? "si":"no" });
});

router.get('/salir', function (req, res){
  
  res.cookie('idusuario', '');
  res.cookie('nombreusuario', '');
  res.cookie('Sucursal', '');

  return res.redirect('/ingresar');
});


module.exports = router;
