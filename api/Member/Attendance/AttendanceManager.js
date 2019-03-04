const attendanceRepository = require('../../../repo/attendanceRepository');
const common = require('../../../app/common');
const MSG = require('../../../app/common').MSG;

class AttendanceManager{

     MarkAttendance(data){
        return attendanceRepository.markAttendance(data).then((result) => 
        {
            if(!result)
                return MSG(17).then((err) => {return {"Result": err, "ErrorOccurred" : true}});
            else
                return {"Result": result, "ErrorOccurred" : false};
        });
    }
}

module.exports = new AttendanceManager();