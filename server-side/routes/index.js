const express = require('express');
const route = express.Router();
const homeRoute = require('./homeRoute');
const loginRoute = require('./loginRoute');
const roomRoute = require('./roomRoute');

route.use('/', homeRoute);
route.use('/login', loginRoute);
route.use('/room', roomRoute);

module.exports = route;