var cron = require('node-cron');
var cronRepository = require('../repo/cronRepository');

class Cron{

    async updateMonthlySubscription(){
        cron.schedule('00 00 1 * *', () => {
            console.log("Its updating Fee Status");

              this.setMonthlyFeeStatus();

              this.setMonthlyStatus();
             
        });
    }

    async setMonthlyFeeStatus(){
        var result = await cronRepository.getAllMembers();
        if(result){
            cronRepository.refreshMonthlyRecords(result)
        }
    }

    async setMonthlyAttendance(){
        var result = await cronRepository.getAllMembers();
        if(result){
            
        }
    }

    async setMonthlyStatus(){

    }

    // checkLastDay(){
    //     var dt = new Date();
    //     if(dt.getDate() === new Date(dt.getFullYear(), dt.getMonth()+1, 0).getDate())
    //     return true;
    //     else return false;
    // }

}

module.exports = new Cron();

