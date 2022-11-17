'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('user_games', {
      id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
      },
      games_id: {
        type: Sequelize.INTEGER,
        references: { model: 'games', key: 'id' }
      }
    });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('user_games');
  }
};
