const fs = require('fs');
const path = require('path');
const rutaBase = path.resolve('./src/database/products.json')

const productos = JSON.parse(fs.readFileSync(rutaBase));



module.exports = {

  index: (req, res) => {
    return res.render('index', { productos: productos })
  },
  login: (req, res) => {
    return res.render('login')
  },
  register: (req, res) => {
    return res.render('register')
  },









  create: (req, res) => {
    return res.render('formCreate')
  },

  createMachine: (req, res) => {
    let productoNuevo = {
      "id": productos.length + 1,
      "nombre": req.body.name,
      "precio": req.body.price,
      "descuento": req.body.discount,
    }

    fs.writeFileSync(rutaBase, JSON.stringify([...productos, productoNuevo], null, 2), "utf-8")

    return res.redirect("/")
  },













  edit: (req, res) => {
    const productoEncontrado = productos.find(row => row.id == req.params.id);
    if (productoEncontrado) return res.render('formEdit', { productos: productoEncontrado });
    else return res.send("ERROR 404 PRODUCT NOT FOUND")
  },

  editMachine: (req, res) => {
    const productoEncontrado = productos.find(row => row.id == req.params.id);
    productoEncontrado.nombre = req.body.name;
    productoEncontrado.precio = parseFloat(req.body.price);
    productoEncontrado.descuento = req.body.discount;

    fs.writeFileSync(rutaBase, JSON.stringify(productos, null, 2), "utf-8");
    return res.redirect("/")
  },











  delete: (req, res) => {
    const sinBorrados = productos.filter(row => row.isDeleted != true);
    return res.render('formDelete', { productos: sinBorrados });
  },

  deleteMachine: (req, res) => {
    const productoEncontrado = productos.find(row => row.id == req.params.id)
    productoEncontrado.isDeleted = true
    fs.writeFileSync(rutaBase, JSON.stringify(productos, null, 2), "utf-8");
    return res.redirect('/products/delete');
  }

}

