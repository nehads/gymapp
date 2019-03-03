const db = require('../models/index');
require("../app/globalValues");

class membershipRepository {
    // getByCredentials(Member_ID) {
    //     return db.Membership.findAll({ where: { 'Member_ID': Member_ID } });
    // }

    // generateToken(userdata) {
    //     return module.exports.getbyId(userdata.Member_ID).then((user) => {
    //         if (!user)
    //             return false;
    //         else {
    //             //  delete userdata.dataValues.Password;
    //             //delete userdata.dataValues.id;
    //             return userdata;
    //         }
    //     });
    // }

    getbyId(data) {

        return db.Membership.findOne({ where: { 'Member_ID': data.Member_ID, 'Membership_ID': data.Membership_ID } });
    }

    async getMemberFeeStatus(userQuery) {
        var query = "SELECT a.*, b.Amount, b.Fee_Status as Fee_Status, b.Membership_ID " +
            " from members as a " +
            " left OUTER join membership as b on a.Member_ID = b.Member_ID" +
            " where a.Admin_ID = '" + userQuery.Admin_ID + "' " +
            " and b.Fee_Status = '" + userQuery.Fee_Status + "' " +
            " and b.Month = '" + userQuery.Month + "' ";
        return db.sequelize.query(query, { type: db.sequelize.QueryTypes.SELECT });
    }

    async update(data) {

        var response = await this.getbyId(data).then((user) => {
            if (!user)
                return false;
            else
                return user.update(data);
        });
        return response;
    }

    async getMemberStatus(userQuery) {
        var query = "SELECT a.*, b.Amount " +
            " from members as a " +
            " left OUTER join membership as b on a.Member_ID = b.Member_ID" +
            " where a.Admin_ID = '" + Admin_ID + "' " +
            " and b.Status = '" + global.Fee_Status.Unpaid_Status + "' " +
            " and b.Month = '" + Month + "' ";
        return db.sequelize.query(query, { type: db.sequelize.QueryTypes.SELECT });
    }
}

module.exports = new membershipRepository();