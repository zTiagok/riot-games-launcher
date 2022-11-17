const express = require('express');
const usersControllers = require('../controllers/users.controller');

const route = express.Router();

route.get('/users', usersControllers.retrieveAllUsers);

route.post('/users', usersControllers.insertNewUser)

module.exports = route;