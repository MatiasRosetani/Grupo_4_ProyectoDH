const express = require ('express');
const Router = express.Router();
const prodControllers = require ('../controllers/prodControllers.js');

Router.get ('/edicion-prod', prodControllers.editarProducto);