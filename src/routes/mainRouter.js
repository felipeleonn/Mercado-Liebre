const express = require('express');
const router = express.Router();

const controller = require('../controllers/mainController');




// VISTAS
router.get('/', controller.index);
router.get('/login', controller.login);
router.get('/register', controller.register);


// CREATE
router.get('/products/create', controller.create);
router.post('/products', controller.createMachine);


// EDIT
router.get('/products/edit/:id', controller.edit);
router.put('/products/:id', controller.editMachine);


// DELETE
router.get('/products/delete', controller.delete);
router.delete('/delete/:id', controller.deleteMachine);



module.exports = router
