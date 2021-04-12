const express = require('express');
const router = express.Router();

const producController = require('../controller/productoController');

router.get('/',
    producController.list
);
router.get('/:id',
    producController.getOne
);
router.post('/', producController.create);
router.put('/:id', producController.update);
router.delete('/:id', producController.delete);




module.exports = router;