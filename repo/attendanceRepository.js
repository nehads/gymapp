const db = require('../models/index');
const memberRepository = require('./memberRepository');

class attendanceRepository{
    async markAttendance(data){
     
        var response = await memberRepository.getbyId(data).then((user) => {
            if (!user)
             return false;
            else 
             return this.update(data.Member_ID);
        });
        return response;
    }

    async update(data){
        var response = await this.getRecord(data).then((record) => {
            var responseMsg = {};
            if (!record)
             return false;
            else {
              record.update({'IsPresent': true});
              responseMsg.Result = "Success";
              return responseMsg;
            }
        });
        return response;
    }

    getRecord(Member_ID){
        var date = new Date();
        var Day = date.getDate();
        var Month = date.toLocaleString('en-us', { month: 'long' });
        var Year = date.getFullYear();

        return db.Attendance.findOne({where: {'Member_ID': Member_ID, 'Day': Day, 'Month': Month, 'Year':Year}})
    }
}

module.exports = new attendanceRepository();