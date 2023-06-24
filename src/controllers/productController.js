const fs = require('fs');
const path = require('path');
const rutaBase = path.resolve('./src/database/products.json')

const productos = JSON.parse(fs.readFileSync(rutaBase));



module.exports = {


  createView: (req, res) => {
    return res.render('products/formCreate')
  },

  createProdMachine: (req, res) => {
    const productoNuevo = {
      "id": productos.length + 1,
      "nombre": req.body.name,
      "precio": parseFloat(req.body.price),
      "descuento": req.body.discount,
      "imagen": "/img/" + req.file.filename,
      "isDeleted": false
    }

    productos.push(productoNuevo);
    fs.writeFileSync(rutaBase, JSON.stringify(productos, null, 2), "utf-8")

    return res.redirect('/')
  },








  editView: (req, res) => {
    const productoEncontrado = productos.find(row => row.id == req.params.id);
    if (productoEncontrado) return res.render('formEdit', { productos: productoEncontrado });
    else return res.send("ERROR 404 PRODUCT NOT FOUND")
  },

  editProdMachine: (req, res) => {
    const productoEncontrado = productos.find(row => row.id == req.params.id);
    productoEncontrado.nombre = req.body.name;
    productoEncontrado.precio = parseFloat(req.body.price);
    productoEncontrado.descuento = req.body.discount;
    productoEncontrado.imagen = req.file.filename;

    fs.writeFileSync(rutaBase, JSON.stringify(productos, null, 2), "utf-8");
    return res.redirect("/")
  },







  deleteView: (req, res) => {
    const sinBorrados = productos.filter(row => row.isDeleted != true);
    return res.render('formDelete', { productos: sinBorrados });
  },

  deleteProdMachine: (req, res) => {
    const productoEncontrado = productos.find(row => row.id == req.params.id)
    productoEncontrado.isDeleted = true
    fs.writeFileSync(rutaBase, JSON.stringify(productos, null, 2), "utf-8");
    return res.redirect('/products/delete');
  }

}

