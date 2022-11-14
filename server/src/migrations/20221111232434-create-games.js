'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('games', {
      id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE
    });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('games');
  }
};
