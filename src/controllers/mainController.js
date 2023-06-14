const fs = require('fs');
const path = require('path');
const rutaBase = path.resolve('./src/database/products.json')

const productos = JSON.parse(fs.readFileSync(rutaBase));



module.exports = {

  index: (req, res) => {
    return res.render('index', { productos: productos })
  },
  login: (req, res) => {
    res.render('login')
  },
  register: (req, res) => {
    res.render('register')
  }

}

