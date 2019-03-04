'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Attendance', {
      Id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Member_ID: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Members',
          key:   "Member_ID"
        }
      },
      IsPresent: {
        type: Sequelize.BOOLEAN
      },
      Day: {
        type: Sequelize.INTEGER
      },
      Month: {
        type: Sequelize.STRING
      },
      Year: {
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
    return queryInterface.dropTable('Attendances');
  }
};