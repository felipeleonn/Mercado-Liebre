const path = require('path')
const express = require('express');
const router = express.Router();
const multer = require('multer');

const controller = require('../controllers/mainController');

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


// VISTAS
router.get('/', controller.index);
router.get('/login', controller.login);
router.get('/register', controller.register);


// CREATE
router.get('/products/create', controller.create);
router.post('/products', fileUpload.single('image'), controller.createMachine);


// EDIT
router.get('/products/edit/:id', controller.edit);
router.put('/products/:id', controller.editMachine);


// DELETE
router.get('/products/delete', controller.delete);
router.delete('/delete/:id', controller.deleteMachine);



module.exports = router
