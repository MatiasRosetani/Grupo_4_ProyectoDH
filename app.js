const express = require ('express');
const path = require ('path');
const app = express();

const publicPath = path.resolve(__dirname, './public');

app.use (express.static(publicPath));


app.get ('/palabras'), (req, res) => {
    res.send ('palabras random');
};

app.get ('/carrito', (req, res) => {
    res.sendFile (path.resolve(__dirname, './views/carrito.html'))
});

app.get ('/checkout', (req, res) => {
    res.sendFile (path.resolve(__dirname, './views/check-out.html'))
});

app.listen (3030, () => {
    console.log('Servidor corriendo en el puerto 3030');
});