'use strict';

const sequelize = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('valores_recebidos', { 
      id:{
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      idprodutos: {
        type: sequelize.STRING,
        allowNull: false,
       },
      valortotal:{
        type: sequelize.STRING,
        allowNull: false,
       },
      valorcomdesconto:{
        type: sequelize.STRING,
        allowNull: false,
       },
       valordodesconto:{
        type: sequelize.STRING,
        allowNull: false,
       },
       
      create_at:{
        type: sequelize.DATE,
        allowNull: false,
       },


      /*updated_at:{
        type: sequelize.DATE,
        allowNull: false,
      }*/
      
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