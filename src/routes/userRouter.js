const express = require ('express');
const Router = express.Router();
const userController = require ('../src/controllers/userController');

Router.get ('/login', userController.login);
Router.get ('/register', userController.register);
Router.get ('/profile/:id', userController.profile);


module.exports = Router;