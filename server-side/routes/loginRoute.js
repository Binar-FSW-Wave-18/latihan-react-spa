const express = require('express');
const route= express.Router();
const LoginController = require('../controllers/loginController');

route.get('/', LoginController.entryLogin);
route.post('/', LoginController.loginInput);
route.get('/wrong', LoginController.wrong);
route.get('/success', LoginController.success);
route.get('/register', LoginController.entryRegister);
route.post('/register', LoginController.register);

module.exports = route;