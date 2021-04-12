const express = require('express');
const router = express.Router();

const orderController = require('../controller/orderController');

router.get('/',
    orderController.list
);
router.post('/', orderController.create); //listo
router.post('/ordenadd', orderController.agregarproducto); //listo 
router.get('/orderbyuser/:id', orderController.ordersbyUser); //listo
router.put('/:id', orderController.update); //listo 
router.delete('/:id', orderController.delete);
router.get('/productbyorder/:id', orderController.producsbyorder);


module.exports = router;