'use strict';
const uuidV1 = require('uuid/v1');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return (queryInterface.bulkInsert('MSGCodes',
      [{ id: uuidV1(), Code: 0, Type: "Error", Msg: "Error Occured", createdAt: new Date(), updatedAt: new Date() },
      { id: uuidV1(), Code: 1, Type: "Error", Msg: "Not Authourized", createdAt: new Date(), updatedAt: new Date() },
      { id: uuidV1(), Code: 2, Type: "Error", Msg: "Incorrect UserName or Password", createdAt: new Date(), updatedAt: new Date() },
      { id: uuidV1(), Code: 3, Type: "Error", Msg: "Member/Admin does not exist.", createdAt: new Date(), updatedAt: new Date() },
      { id: uuidV1(), Code: 4, Type: "Error", Msg: "Error occured while sending msg", createdAt: new Date(), updatedAt: new Date() },
      { id: uuidV1(), Code: 5, Type: "Error", Msg: "Amount cannot be null", createdAt: new Date(), updatedAt: new Date() },
      { id: uuidV1(), Code: 6, Type: "Error", Msg: "Phone Number already exists", createdAt: new Date(), updatedAt: new Date() },
      { id: uuidV1(), Code: 7, Type: "Error", Msg: "Phone Number Does not exist", createdAt: new Date(), updatedAt: new Date() },
      { id: uuidV1(), Code: 8, Type: "Error", Msg: "Admin ID does not exists", createdAt: new Date(), updatedAt: new Date() },
      { id: uuidV1(), Code: 9, Type: "Error", Msg: "No paid users for this Admin", createdAt: new Date(), updatedAt: new Date() },
      { id: uuidV1(), Code: 11, Type: "Error", Msg: "Membership/Member id does not exist", createdAt: new Date(), updatedAt: new Date() },
      { id: uuidV1(), Code: 15, Type: "Error", Msg: "Admin ID does not exists", createdAt: new Date(), updatedAt: new Date() },
      { id: uuidV1(), Code: 16, Type: "Error", Msg: "No paid users for this Admin", createdAt: new Date(), updatedAt: new Date() },
      { id: uuidV1(), Code: 17, Type: "Error", Msg: "Corresponding record does not exist", createdAt: new Date(), updatedAt: new Date() },
      { id: uuidV1(), Code: 28, Type: "Error", Msg: "Incorrect Password", createdAt: new Date(), updatedAt: new Date() },
      ]
      , {}));

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
