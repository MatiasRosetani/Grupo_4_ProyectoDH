const path = require('path');

const mainControllers = {
    home: (req, res) => {
        res.render(path.resolve(__dirname, '../views/home.ejs'));
    },
}
module.exports = mainControllers;