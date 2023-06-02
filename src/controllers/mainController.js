const path = require('path');

module.exports = {

  index: (req, res) => {
    res.sendFile( path.resolve('./views/home.html') )
  },
  login: (req, res) => {
    res.sendFile( path.resolve('./views/login.html') )
  },
  register: (req, res) => {
    res.sendFile( path.resolve('./views/register.html') )
  }

}