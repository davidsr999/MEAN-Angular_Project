const express = require('express');
const router = express.Router();
const Item = require('../models2/item'); // importamos el modelo stock
const crearController = require('../controllers/crearItem');
const getController = require('../controllers/getItems');
const putController = require('../controllers/updateItem');
const removeItem = require('../controllers/removeItem');
const obtenerItem = require('../controllers/obtenerItem');

router.post('/', crearController.crear);
router.get('/', getController.get);
router.put('/:id', putController.update);
router.get('/:id', obtenerItem.obten);
router.delete('/:id', removeItem.elimina);


module.exports =    router;