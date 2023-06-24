const path = require('path')
const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();
const multer = require('multer');


const multerDiskStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../public/img'))
  },

  filename: function (req, file, cb) {
    // extname te da la extensión del archivo
    let imageName = Date.now() + path.extname(file.originalname);
    cb(null, imageName)
  }
});


const fileUpload = multer({
  storage: multerDiskStorage
});

// CREATE
router.get('/create', productController.createView);
router.post('/create', fileUpload.single('image'), productController.createProdMachine);


// EDIT
router.get('/edit/:id', productController.editView);
router.put('/:id', productController.editProdMachine);


// DELETE
router.get('/delete', productController.deleteView);
router.delete('/delete/:id', productController.deleteProdMachine);



module.exports = router
