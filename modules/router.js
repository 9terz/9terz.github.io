'use strict';

let express = require('express');
let router = express.Router();

let HomeController = require('./controller')
router.get('/', HomeController.Home);

module.exports = router;
