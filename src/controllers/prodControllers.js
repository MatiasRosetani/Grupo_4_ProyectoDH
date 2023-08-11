
const path = require('path');

const prodControllers = {
    editarProducto: (req, res) => {
        res.render(path.join(__dirname, '../views/edicion-prod.ejs'));
    },
};

module.exports = prodControllers;