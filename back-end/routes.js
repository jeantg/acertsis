const express = require('express');
const routes = express.Router();
const MainController = require('./controllers/MainController');
const MaxShopController = require('./controllers/MaxShopController');
const Recommend = require('./controllers/RecommendController');
const Clients2018Controller = require('./controllers/Clients2018Controller');
const Login = require('./controllers/LoginController')
const Max = require('./controllers/MaxValue');
routes.get('/store', Recommend.index)
routes.get('/login', Login.index);
routes.get('/max', Max.index)
routes.get('/insert', Max.store2)
routes.get('/user', Max.store3)
routes.get('/produtos', Max.store4)
routes.get('/main/:page', MainController.index)
routes.get('/maxshop/', MaxShopController.index)
routes.get('/2018/:page', Clients2018Controller.index)
module.exports = routes;