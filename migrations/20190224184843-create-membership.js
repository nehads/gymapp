'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Membership', {
      Membership_ID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      Member_ID: {
        type: Sequelize.UUID
      },
      Month: {
        type: Sequelize.STRING
      },
      Year: {
        type: Sequelize.INTEGER
      },
      Fee_Status: {
        type: Sequelize.STRING
      },
      Amount: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Membership');
  }
};