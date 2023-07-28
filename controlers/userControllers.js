const path = require('path');

login: (req,res) => {
    res.sendfile(path.resolve(__dirname,'../views/login.ejs'));
}