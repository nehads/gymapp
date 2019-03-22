const db = require('../models/index');
require("../app/globalValues");
const MSG = require('../app/common').MSG;

class membershipRepository {

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

        if (data.Amount == null || data.Amount == 0)
            return MSG(5).then((err) => { return { "Result": err, "ErrorOccurred": true } });

        var response = await this.getbyId(data).then((user) => {
            if (!user)
                return MSG(11).then((err) => { return { "Result": err, "ErrorOccurred": true } });
            else
                return user.update(data);
        });
        return response;
    }

    getMemberStatus(userQuery) {

        return db.Members.findAll({ where: { 'Admin_ID': userQuery.Admin_ID, 'Status': userQuery.Status } })
    }
}

module.exports = new membershipRepository();