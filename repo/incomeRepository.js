const db = require('../models/index');
require("../app/globalValues");
const adminRepository = require('./adminRepository');

class incomeRepository{

    async getTotalIncome(data){
        var Income = {}; 
        var Admin_ID = await adminRepository.getbyId(data.Admin_ID);
        if(Admin_ID!=null) 
        {
            Income.Admin_ID = Admin_ID.Admin_ID;
            Income.Monthly = await this.getMonthlyIncome(data);
            Income.Yearly = await this.getYearlyIncome(data);
           
            return Income;
        }
        else
            false;
   
    }
   
    async getMonthlyIncome(userQuery){
        var query = "SELECT a.Member_ID, b.Amount, b.Month " +
        " from members as a " +
        " left OUTER join membership as b on a.Member_ID = b.Member_ID" +
        " where a.Admin_ID = '" + userQuery.Admin_ID + "' " +
        " and b.Fee_Status = '" + global.Fee_Status.Paid_Status + "' " +
        " and b.Year = '" + userQuery.Year + "' ";
        return db.sequelize.query(query,{ type: db.sequelize.QueryTypes.SELECT});
    }

    async getYearlyIncome(userQuery){
        var query = "SELECT SUM(b.Amount) as Total, b.Year"+
        " from members as a" +
        " left OUTER join membership as b on a.Member_ID = b.Member_ID" +
        " where a.Admin_ID = '" + userQuery.Admin_ID + "'" +
        " and b.Fee_Status = '" + global.Fee_Status.Paid_Status + "'" +
        " group by b.Year ";

        return db.sequelize.query(query,{type: db.sequelize.QueryTypes.SELECT});
    }

}

module.exports = new incomeRepository();


