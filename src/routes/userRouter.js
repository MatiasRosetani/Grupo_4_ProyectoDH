const express = require ('express');
const Router = express.Router();
const userController = require ('../controllers/userControllers.js');

Router.get ('/login', userController.login);
Router.get ('/register', userController.register);
Router.post('/register', userController.create);
Router.get ('/carrito', userController.carrito);
Router.get ('/check-out', userController.checkout);
Router.get ('/search',userController.search);
Router.get ('/edicion-prod', userController.editarProducto);



module.exports = Router;