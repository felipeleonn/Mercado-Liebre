const path = require('path');

const express = require('express');
const app = express();
const mainRouter = require('./routes/mainRouter');

// Colocar ambas líneas para que funcione EJS
app.set( 'views', path.join(__dirname, 'views') );
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.listen( process.env.PORT || 3000, () =>  console.log('Servidor local activado en 3000') );

app.use(mainRouter);


