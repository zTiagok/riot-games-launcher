'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
       id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
       },
       username: {
        type: Sequelize.STRING(25),
        allowNull: false,
        unique: true
       },
       password: { 
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
       created_at: Sequelize.DATE,
       updated_at: Sequelize.DATE
      });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};