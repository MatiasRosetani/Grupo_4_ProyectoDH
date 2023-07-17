<<<<<<< HEAD
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
=======
const express = require('express');
const app = express();

app.use('/static', express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});
app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
>>>>>>> 5dc2b617c9811a5e40ac27ad4281d07670d5d12e
});