'use strict';
const uuidV1 = require('uuid/v1');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Membership',
    [{ Membership_ID: uuidV1(), Member_ID: "3e317090-3d7b-11e9-8f45-d1780e682e1e", Month:"March", Year:2019, Fee_Status:"paid", Amount: 3000, createdAt: new Date(), updatedAt: new Date()},
    { Membership_ID: uuidV1(), Member_ID: "3e317090-3d7b-11e9-8f45-d1780e682e1e", Month:"April", Year:2013, Fee_Status:"unpaid", Amount: 4000, createdAt: new Date(), updatedAt: new Date()},
    {Membership_ID: uuidV1(), Member_ID: "3e317090-3d7b-11e9-8f45-d1780e682e1e", Month:"June", Year:2013, Fee_Status:"paid", Amount: 5000, createdAt: new Date(), updatedAt: new Date()},
    { Membership_ID: uuidV1(), Member_ID: "3e317090-3d7b-11e9-8f45-d1780e682e1e", Month:"Dec", Year:2019, Fee_Status:"unpaid", Amount: 7000, createdAt: new Date(), updatedAt: new Date()},
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
