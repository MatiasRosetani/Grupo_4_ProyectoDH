const { log } = require('console');
const path = require('path');
const { search } = require('../routes/userRouter');


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
    productList: (req,res) => {
        let products = [
            {id: 1, name:'product1'},
            {id: 2, name:'product2'},
            {id: 3, name:'product3'},
            {id: 4, name:'product4'},
            {id: 5, name:'product5'},
            {id: 6, name:'product6'},
        ];

        res.render('productsList',{'products':products});
    },
    search: function(req,res) {
        let loQueBuscoElUsuario = req.query.search;
        
        let products = [
            {id: 1, name:'product1'},
            {id: 2, name:'product2'},
            {id: 3, name:'product3'},
            {id: 4, name:'product4'},
            {id: 5, name:'product5'},
            {id: 6, name:'product6'},
        ];

        let productResults = [];

        for (let i = 0; i < products.length; i++) {
            if (products[i].name.includes(loQueBuscoElUsuario)){
                productResults.push(products[i]);
            }
        }
        
        res.render('productResults',{productResults:productResults})
    },
    create: function(req,res) {
        let users = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            correo: req.body.correo,
            telefono: req.body.telefono,
            direccion: req.body.direccion,
            codigoPostal: req.body.codigoPostal,
            pais: req.body.pais,
            codigoRef: req.body.codigoRef,
            contraseña: req.body.contraseña,
        }

        res.redirect('/user/productsList');
    },
    edit: function(req,res) {
        let idProduct = req.params.idProduct;

        let products = [
            {id: 1, name:'product1'},
            {id: 2, name:'product2'},
            {id: 3, name:'product3'},
            {id: 4, name:'product4'},
            {id: 5, name:'product5'},
            {id: 6, name:'product6'},
        ];

        let productToEdit = products[idProduct];

        res.render('productEdit', {productToEdit: productToEdit});
    }
}

module.exports = controllers;  