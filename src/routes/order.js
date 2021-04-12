const express = require('express');
const router = express.Router();

const orderController = require('../controller/orderController');

router.get('/',
    orderController.list
);
router.post('/', orderController.create);
router.post('/ordenadd', orderController.agregarproducto);
router.get('/orderuser/id', orderController.ordersbyUser);
router.put('/id', orderController.update);
router.delete('/id', orderController.delete);
router.get('/orderuser/id', orderController.producsbyorder);


module.exports = router;