const adminRepository = require('../../../repo/adminRepository');
const common = require('../../../app/common');
const MSG = require('../../../app/common').MSG;

class AdminManager{

    login(data)
    {
         return adminRepository.getByCredentials(data.Admin_Name,data.Password).then((user) => {
            if(!user)
            return MSG(2).then((err) => {return {"Result": err, "ErrorOccurred" : true}});
            else
            return adminRepository.generateToken(user).then((token) => {
                return {"Result": token, "ErrorOccurred" : false};
            });
    });
    }


}

module.exports = new AdminManager();