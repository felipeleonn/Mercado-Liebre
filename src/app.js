const path = require('path');
const express = require('express');
const app = express();


// ROUTERS
const mainRouter = require('./routes/mainRouter');
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');


// FORM PUT - DELETE METHOD
const methodOverride = require('method-override');


// MIDDLEWARES
const middlewareJson = express.json();
const logMiddleware = require('./middlewares/logMiddleware')





app.use(express.static('public'));
app.use('/products', express.static(path.join(__dirname, '../views/products')));
app.use('/users', express.static(path.join(__dirname, '../views/users')));


//  Para leer la info que llegue del formulario
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// USE IN FORM: PUT - DELETE METHOD
app.use(methodOverride('_method'));


// Colocar ambas líneas para que funcione EJS
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');


// MIDDLEWARES
app.use(middlewareJson)
app.use(logMiddleware)





app.listen(process.env.PORT || 3000, () => console.log('Servidor local activado en 3000'));


app.use('/',mainRouter);
app.use('/product', productRouter);
app.use('/user',userRouter);


