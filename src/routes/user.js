const express = require('express');
const router = express.Router();

const userController = require('../controller/userController');

router.get('/',
    userController.list
);
router.get('/:email',
    userController.getbyemail
);

router.get('/:id',
    userController.getbyid
);
router.put('/:email', userController.update);
router.post('/', userController.create);





module.exports = router;