const path = require('path')
const express = require('express');
const userController = require('../controllers/userController');
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
router.get('/create', userController.createView);
router.post('/create', fileUpload.single('image'), userController.createUserMachine);


// EDIT
router.get('/edit/:id', userController.editView);
router.put('/:id', userController.editUserMachine);


// DELETE
router.get('/delete', userController.deleteView);
router.delete('/delete/:id', userController.deleteUserMachine);



module.exports = router
