const path = require('path');

const express = require('express');
const app = express();
const mainRouter = require('./routes/mainRouter');

const methodOverride = require('method-override');





app.use(express.static('public'));

//  Para leer la info que llegue del formulario
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Para usar PUT, DELETE en los forms
app.use(methodOverride('_method'));





// Colocar ambas líneas para que funcione EJS
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');


app.listen(process.env.PORT || 3000, () => console.log('Servidor local activado en 3000'));

app.use(mainRouter);


