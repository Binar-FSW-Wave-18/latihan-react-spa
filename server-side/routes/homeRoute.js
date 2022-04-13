const express = require('express');
const route = express.Router();
const HomeController = require('../controllers/homeController');

route.get('/', HomeController.welcome);

module.exports = route;