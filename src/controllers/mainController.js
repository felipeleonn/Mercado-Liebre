const fs = require('fs');
const path = require('path');
const rutaBase = path.resolve('./src/database/products.json')

const productos = JSON.parse(fs.readFileSync(rutaBase));



module.exports = {

  index: (req, res) => {
    const sinBorrados = productos.filter(producto => producto.isDeleted != true)
    return res.render('index', { productos: sinBorrados })
  },
  login: (req, res) => {
    return res.render('users/login')
  },
}

