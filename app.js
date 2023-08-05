const express = require('express');
const app = express();
const path = require('path');

//Rutas:
const mainRouter = require('./src/routes/mainRouter');
const userRoutes = require('./src/routes/userRouter');

app.set('view engine','ejs');

/*app.get('/home', (req, res) => {
    res.render('home');
});

app.get('/crearProducto', (req, res) => {
    res.render('crear-quitar-prod');
});

app.get('/carrito', (req, res) => {
    res.render('carrito');
});

app.get('/checkout', (req, res) => {
    res.render('check-out');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/register', (req, res) => {
    res.render('register');
});*/



/*app.set('views', [
    path.join(__dirname, './views')
]);*/

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/',mainRouter);
app.use('/user',userRoutes);


app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});



