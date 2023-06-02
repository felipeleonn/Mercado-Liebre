const express = require('express');
const app = express();
const mainRouter = require('./routes/mainRouter');



app.use(express.static('public'));

app.listen( process.env.PORT || 3000, () =>  console.log('Servidor local activado en 3000') );

app.use(mainRouter)


