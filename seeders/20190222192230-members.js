'use strict';
const uuidV1 = require('uuid/v1');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Members',
      [{ Member_ID: uuidV1(), Admin_ID: "74e41a70-3925-11e9-b61c-8b4423c870b9", Member_Name: "aaaa", Contact_No: "6666", Address: "Panjim-Goa", Emergency_No: "1111", Registration_Date: new Date(), Service: "Fitness", Service_Charges: 100, Status: "active", IsDeleted: false, createdAt: new Date(), updatedAt: new Date() },
      { Member_ID: uuidV1(), Admin_ID: "74e44182-3925-11e9-b61c-8b4423c870b9", Member_Name: "bbbb", Contact_No: "5555", Address: "Panjim-Goa", Emergency_No: "1111", Registration_Date: new Date(), Service: "Fitness", Service_Charges: 150, Status: "inactive", IsDeleted: false, createdAt: new Date(), updatedAt: new Date() },
      { Member_ID: uuidV1(), Admin_ID: "74e44182-3925-11e9-b61c-8b4423c870b9", Member_Name: "cccc", Contact_No: "4444", Address: "Panjim-Goa", Emergency_No: "1111", Registration_Date: new Date(), Service: "Fitness", Service_Charges: 300, Status: "inactive", IsDeleted: true, createdAt: new Date(), updatedAt: new Date() },
      { Member_ID: uuidV1(), Admin_ID: "74e44182-3925-11e9-b61c-8b4423c870b9", Member_Name: "dddd", Contact_No: "3333", Address: "Panjim-Goa", Emergency_No: "1111", Registration_Date: new Date(), Service: "Fitness", Service_Charges: 400, Status: "active", IsDeleted: false, createdAt: new Date(), updatedAt: new Date() }
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
