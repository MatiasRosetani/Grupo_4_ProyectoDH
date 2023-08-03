const { log } = require('console');
const path = require('path');


const controllers = {
    login: (req, res) => {
        res.render(path.join(__dirname, '../views/login.ejs'));
    },
    register: (req, res) => {
        res.render(path.join(__dirname, '../views/register.ejs'));
    },
    carrito: (req, res) => {
        res.render(path.join(__dirname, '../views/carrito.ejs'));
    },
    checkout: (req, res) => {
        res.render(path.join(__dirname, '../views/check-out.ejs'));
    },
    crearProducto: (req, res) => {
        res.render(path.join(__dirname, '../views/crear-quitar-prod.ejs'));
    },
}

module.exports = controllers;  