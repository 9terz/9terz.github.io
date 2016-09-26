'use strict';

let express = require('express');
let app = express();

/**
 * Route initiate
 */

let homeRouter = require('./modules/router');
app.use('/', homeRouter);


module.exports = app;
