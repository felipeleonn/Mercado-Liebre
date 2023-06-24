// Dejamos registro de donde entran nuestros usuarios
const fs = require('fs');


const logMiddleware = (req, res, next) => {
  fs.appendFileSync('log.txt', 'Se ingresó en la pagina ' + req.url)

  // para que siga el middelware su curso natural hacia el siguiente paso
  next();
}

module.exports = logMiddleware; 