const { Router } = require('express');
const UserController = require('./controllers/UserControllers');
const PagControllers = require('./controllers/PagControllers');


const routes = new Router();


routes.get('/lista/:id', UserController.index);
routes.post('/pagamentos', PagControllers.store);
routes.get('/pagamentos', PagControllers.index);





module.exports = routes;  