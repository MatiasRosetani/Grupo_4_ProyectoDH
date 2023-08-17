const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

//Rutas:
const mainRouter = require('./src/routes/mainRouter');
const userRoutes = require('./src/routes/userRouter');
const prodRouter = require('./src/routes/prodRouter');

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.set('views', [
    path.join(__dirname, './views')
]);

app.use('/', mainRouter);
app.use('/user', userRoutes);
app.use('/products', prodRouter);




app.listen(3000, () => {
    console.log('Servidor funcionando');
});



