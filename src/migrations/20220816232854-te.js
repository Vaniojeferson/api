'use strict';

const sequelize = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('listas778', { 
      id:{
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      descrição: {
        type: sequelize.STRING,
        allowNull: false,
       },
      código:{
        type: sequelize.STRING,
        allowNull: false,
       },
      valor:{
        type: sequelize.STRING,
        allowNull: false,
       },
      created_at:{
        type: sequelize.DATE,
        allowNull: true,
       },
      updated_at:{
        type: sequelize.DATE,
        allowNull: true,
      }
      
    });
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
