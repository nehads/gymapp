'use strict';
const uuidV1 = require('uuid/v1');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Admins',
      [{ Admin_ID: uuidV1(), User_Name: "admin", Password: "admin", createdAt: new Date(), updatedAt: new Date() },
      { Admin_ID: uuidV1(), User_Name: "admin1", Password: "admin1", createdAt: new Date(), updatedAt: new Date() },
      { Admin_ID: uuidV1(), User_Name: "admin2", Password: "admin2", createdAt: new Date(), updatedAt: new Date() },
      { Admin_ID: uuidV1(), User_Name: "admin3", Password: "admin3", createdAt: new Date(), updatedAt: new Date() }
      ]
      , {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
