const express = require('express');
const router = express.Router();

//import IndexController from '../controller/indexController';
const indexController = require('../controller/indexController');

router.get('/', indexController.index);

module.exports = router;