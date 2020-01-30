const express = require('express');
const routes = express.Router();
const MainController = require('./controllers/MainController');
const MaxShopController = require('./controllers/MaxShopController');
const Recommend = require('./controllers/RecommendController');
const Clients2018Controller = require('./controllers/Clients2018Controller');
const Login = require('./controllers/LoginController')
routes.get('/store', Recommend.index)
routes.get('/login', Login.index);
routes.get('/produtos', Max.store4)
routes.get('/main/:page', MainController.index)
routes.get('/maxshop/', MaxShopController.index)
routes.get('/2018/:page', Clients2018Controller.index)
module.exports = routes;