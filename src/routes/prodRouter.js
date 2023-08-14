const express = require ('express');
const Router = express.Router();
const prodControllers = require ('../controllers/prodControllers.js');

Router.get ('/editProducts', prodControllers.editarProducto);
Router.get ('/createProducts', prodControllers.crearProducto);

module.exports = Router;