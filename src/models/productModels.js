const fs = require('fs');
const path = require('path');

const modelo = {
    fileRoute: path.join(__dirname, '../data/products.json'),

    findAll: () => {
        
        const jsonData = fs.readFileSync(modelo.fileRoute, 'utf-8');
       
        const products = JSON.parse(jsonData);

        return products;
    },
    findById: (id) => {
        const products = modelo.findAll();

        const selectedProduct = products.find(productoActual => productoActual.id == id);

        return selectedProduct;
    },

    createProduct: (bodyData) => {
        let products = modelo.findAll();

        const lastProdId = products[products.length - 1].id;

        const newProduct = {
            id: lastProdId + 1,
            ...bodyData
        };

        products.push(newProduct);

        const jsonData = JSON.stringify(products);

        fs.writeFileSync(modelo.fileRoute, jsonData, 'utf-8');

        return newProduct;
    }

};

module.exports = modelo;