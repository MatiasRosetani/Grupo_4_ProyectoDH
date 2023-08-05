const { log } = require('console');
const path = require('path');

const controllers = {
    editarProducto: (req, res) => {
        res.sendfile(path.resolve(__dirname, '../views/creacion/edicion-prod.ejs'));
    }
};