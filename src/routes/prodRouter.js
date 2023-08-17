const express = require ('express');
const Router = express.Router();
const prodControllers = require ('../controllers/prodControllers.js');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images/products');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });






Router.get('/', prodControllers.getList);
Router.get('/:id/detail', prodControllers.getDetail);
Router.get ('/:id/edit', prodControllers.editProduct);
Router.get ('/create', prodControllers.createProduct);
Router.post('/', upload.any('img'), prodControllers.postProduct);
Router.delete('/:id/delete', prodControllers.deleteProduct);


module.exports = Router;