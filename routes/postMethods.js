const express = require('express');
const router = express.Router();

const ClienteController = require('../controllers/clientes.controller');


// AQUÍ IRAN NUESTROS MÉTODOS - POST
router.post('/ingresar', ClienteController.logIn);



module.exports = router;
