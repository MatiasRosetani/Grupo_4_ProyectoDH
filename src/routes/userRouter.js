const express = require ('express');
const Router = express.Router();
const userController = require ('../controllers/userControllers.js');

Router.get ('/login', userController.login);
Router.get ('/register', userController.register);
Router.get ('/carrito', userController.carrito);
Router.get ('/check-out', userController.checkout);





module.exports = Router;