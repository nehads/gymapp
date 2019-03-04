'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Attendance', [
        { Member_ID: '3382c760-3926-11e9-9aef-7bc932721780', IsPresent: 0, Day:20, Month:'March', Year:2019, createdAt:new Date(), updatedAt:new Date()},
        { Member_ID: '3382c760-3926-11e9-9aef-7bc932721780', IsPresent: 1, Day:21, Month:'March', Year:2019, createdAt:new Date(), updatedAt:new Date()},
        { Member_ID: '3382c760-3926-11e9-9aef-7bc932721780', IsPresent: 1, Day:22, Month:'March', Year:2019, createdAt:new Date(), updatedAt:new Date()},
        { Member_ID: '3382c760-3926-11e9-9aef-7bc932721780', IsPresent: 0, Day:23, Month:'March', Year:2019, createdAt:new Date(), updatedAt:new Date()},
        { Member_ID: '3382ee72-3926-11e9-9aef-7bc932721780', IsPresent: 0, Day:20, Month:'March', Year:2019, createdAt:new Date(), updatedAt:new Date()},
        { Member_ID: '3382ee72-3926-11e9-9aef-7bc932721780', IsPresent: 1, Day:21, Month:'March', Year:2019, createdAt:new Date(), updatedAt:new Date()}
      ], {});
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
