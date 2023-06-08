const path = require('path');

module.exports = {

  index: (req, res) => {
    res.render('home')
  },
  login: (req, res) => {
    res.render('login')
  },
  register: (req, res) => {
    res.render('register')
  }

}

// el segundo parámetro que recibe render puede ser un objeto literal el cual se usa dinamicamente en EJS 
// El metodo send envía texto y el metodo render la vista