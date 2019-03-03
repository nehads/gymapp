const db = require('../models/index');

class adminRepository 
{
    getByCredentials(Admin_Name, Password)
    {
        return db.Admins.findOne({where: { 'User_Name' : Admin_Name,'Password' : Password}});
    } 
    
    generateToken(userdata)
    {
        return module.exports.getbyId(userdata.Admin_ID).then((user) =>{
            if(!user)
                return false;
            else
            {
                delete userdata.dataValues.Password;
                return userdata;
            }
        });
    }

    getbyId(Admin_ID)
    {
        return db.Admins.findOne({where: { 'Admin_ID' : Admin_ID}});
    }

    // update(data,Admin_ID)
    // {
    //     return this.getbyId(Admin_ID).then((user) =>{
    //         if(!user)
    //             return false;
    //         else
    //             return user.update(data);
    //     });
    // }
    
}

module.exports = new adminRepository();