const incomeRepository = require('../../repo/incomeRepository');
const MSG = require('../../app/common').MSG;


class IncomeManager{

    getIncome(data)
    {
         return incomeRepository.getTotalIncome(data).then((result) => {
            if(!result)
            return MSG(8).then((err) => {return {"Result": err, "ErrorOccurred" : true}});
            else
            return {"Result": result, "ErrorOccurred" : false};
            
    });
    }

}

module.exports = new IncomeManager();