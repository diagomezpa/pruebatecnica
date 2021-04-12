const express = require('express');
const router = express.Router();

const orderController = require('../controller/orderController');

router.get('/',
    orderController.list
);
router.post('/', orderController.create);
router.post('/ordenadd', orderController.agregarproducto);




module.exports = router;