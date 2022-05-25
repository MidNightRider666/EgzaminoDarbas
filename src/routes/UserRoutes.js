const express = require('express');
const { registering, loging } = require('../Controller/UserController');

const {
  validateUserLogging,
  validateUserRegistering,
} = require('../Utilities/middleware');

const userRoutes = express();

userRoutes.post('/login', validateUserLogging, loging);
userRoutes.post('/register', validateUserRegistering, registering);

module.exports = userRoutes;