'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Members', {
      Member_ID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      Admin_ID: { 
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Admins',
          key:   'Admin_ID'
        }
      },
      Member_Name: {
        type: Sequelize.STRING
      },
      Contact_No: {
        type: Sequelize.STRING
      },
      Address: {
        type: Sequelize.STRING
      },
      Emergency_No: {
        type: Sequelize.STRING
      },
      Registration_Date: {
        type: Sequelize.DATE
      },
      Service: {
        type: Sequelize.STRING
      },
      Service_Charges: {
        type: Sequelize.INTEGER
      },
      Status: {
        type: Sequelize.STRING
      },
      // Fee_Status: {
      //   type: Sequelize.STRING
      // },
      IsDeleted: {
        type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable('Members');
  }
};