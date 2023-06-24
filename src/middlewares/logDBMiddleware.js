// Dejamos registro de donde entran nuestros usuarios
const fs = require('fs');


const logDBMiddleware = (req, res, next) => {
  fs.appendFileSync('logDB.txt', 'Se creo un registro al ingresar en ' + req.url)

  // para que siga el middelware su curso natural hacia el siguiente paso
  next();
}

module.exports = logDBMiddleware;