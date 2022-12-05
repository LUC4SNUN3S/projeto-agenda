const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController')
const registerController = require('./src/controllers/registerController')
const contatoController = require('./src/controllers/contatoController');
const { Router } = require('express');

// Rotas da home
route.get('/', homeController.index);

route.get('/login',loginController.index )

route.get('/register',registerController.index )


module.exports = route;
