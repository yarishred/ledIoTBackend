//Modulos
const express = require('express');
const router = express.Router()

//Controller
const ledController = require('../controller/ledController')


//Rutas
router.get('/', ledController.getIndex)


module.exports = router