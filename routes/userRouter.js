const express = require ('express');
const Router = express.Router();
const userController = require ('../controllers/userController');

Router.get ('/login', userController.login);
Router.get ('/register', userController.register);
Router.get ('/profile/:id', userController.profile);


module.exports = Router;