const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

const mainRouter = require('./routes/mainRouter');
const userRoutes = require('./routes/userRouter');

app.use('/',mainRouter);
app.use('/user',userRoutes);


/* app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});
app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});


app.get('/carrito', (req, res) => {
    res.sendFile(__dirname + '/views/carrito.html');
});
    
app.get('/checkout', (req, res) => {
    res.sendFile(__dirname + '/views/check-out.html');
});
     */




