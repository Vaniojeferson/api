const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Pag = require('../models/Pagementos');


const connection = new Sequelize(dbConfig);

User.init(connection);
Pag.init(connection);


//User.associate(connection.models);



module.exports = connection;