const express = require('express');
const router = express.Router();

const controller = require('../controllers/mainController');




// VISTAS
router.get('/', controller.index);
router.get('/user/login', controller.login);
module.exports = router
