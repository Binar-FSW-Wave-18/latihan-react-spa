const express = require('express');
const route = express.Router();
const RoomController = require('../controllers/roomController');
const restrict = require('../middlewares/restrict');

route.get('/', restrict, RoomController.enterPlayRoom);
route.get('/create', restrict, RoomController.createRoom);

module.exports = route;