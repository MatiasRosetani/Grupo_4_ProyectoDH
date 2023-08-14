
const path = require('path');

const prodControllers = {
    editarProducto: (req, res) => {
        res.render(path.join(__dirname, '../views/productEdit.ejs'));
    },
    crearProducto: (req, res) => {
        res.render(path.join(__dirname, '../views/createProduct.ejs'));
    },

};

module.exports = prodControllers;