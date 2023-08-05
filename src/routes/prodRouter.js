const express = require ('express');
const Router = express.Router();
const userController = require ('../controllers/prodControllers.js');

Router.get ('/creacion/edicion-prod', prodController.editarProducto);