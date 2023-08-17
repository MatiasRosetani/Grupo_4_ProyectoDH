const productModel = require('../models/productModels');
const path = require('path');

const prodControllers = {



    getList: (req, res) => {
        const products = productModel.findAll();

        res.render('productList', { products });
    },
    editProduct: (req, res) => {
        const product = productModel.findById(Number(req.params.id));

        res.render('editProduct', { product });
    },
    createProduct: (req, res) => {
        res.render('createProduct');
    },
    
    getDetail: (req, res) => {
        const productId = req.params.id;

        const selectedProduct =  productModel.findById(productId);

        res.render('productDetail', { product: selectedProduct });
    },
    postProduct: (req, res) => {
        console.log(req.body);

        const newProduct = {
            title: req.body.title,
            price: req.body.price,
            talle: req.body.talle,
        }

        const createdProduct = productModel.createProduct(newProduct);

        res.redirect('/products/' + createdProduct.id + '/detail');
    },
    deleteProduct: (req, res) => {
        productModel.destroy(Number(req.params.id));

        res.redirect('/products');
    },
}




module.exports = prodControllers;