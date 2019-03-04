const memberAccount = require('../api/Member/Account/MemberController');
const adminAccount = require('../api/Admin/Account/AdminController');

const memberMembership = require('../api/Member/Membership/MembershipController');

const memberAttendance = require('../api/Member/Attendance/AttendanceController');

const adminIncome = require('../api/Income/IncomeController');

var express = require("express");
var app = express();
var route = express.Router()

class Routes {

    init(app){
        this.app = app;
     
        this.app.use('/api/admin/account', adminAccount);

        this.app.use('/api/member/account', memberAccount);

        this.app.use('/api/member/membership', memberMembership);

        this.app.use('/api/member/attendance', memberAttendance);

        this.app.use('/api/admin/income', adminIncome);

    }
}

module.exports = new Routes();