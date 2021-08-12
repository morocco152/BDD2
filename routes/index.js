const express = require('express');
const router = express.Router();

const ClienteController = require('../controllers/clientes.controller'); // -.


/* GET home page. */
router.get('/ventas', function(req, res, next) {
  res.render('venta');
});

router.get('/dashboard', function (req, res){ //productos
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
  res.render('ingresar');
});
module.exports = router;
