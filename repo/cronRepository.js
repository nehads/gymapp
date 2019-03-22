const db = require('../models/index');
const uuidV1 = require('uuid/v1');
require("../app/globalValues");

class cronRepository{

    getAllMembers(){

        return db.Members.findAll({where: {'IsDeleted': false}});
    }

    async refreshMonthlyRecords(data){
        var monthlyMembership = {};

        var today = new Date();
        var month = today.toLocaleString('en-us', { month: 'long' });
        var year = today.getFullYear();

        for(var i = 0; i < data.length; i++){

            monthlyMembership.Membership_ID = uuidV1();
            monthlyMembership.Member_ID = data[i].Member_ID;
            monthlyMembership.Month = month;
            monthlyMembership.Year = year;
            monthlyMembership.Fee_Status = global.Fee_Status.Unpaid_Status;
            monthlyMembership.Amount = 0;
            monthlyMembership.createdAt = today;
            monthlyMembership.updatedAt = today;

            await this.addMonthlyMembership(monthlyMembership); //expensive
        }
    }

    addMonthlyMembership(data){

        return db.Membership.create(data); 
    }
}

module.exports = new cronRepository();