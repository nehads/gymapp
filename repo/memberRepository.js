const db = require('../models/index');
const uuidV1 = require('uuid/v1');
require("../app/globalValues");

class memberRepository {
   
    getbyContact(Contact_No) {
        return db.Members.findOne({ where: { 'Contact_No': Contact_No } });
    }

    getbyId(data) {

        return db.Members.findOne({ where: { 'Member_ID': data.Member_ID, 'Admin_ID': data.Admin_ID, 'IsDeleted': false} });
    }

    async registerMember(Contact_No, data) {
        var member = await module.exports.getbyContact(Contact_No);
        var product = {};
        if (member == null) {

            data.Member_ID = uuidV1();
            data.IsDeleted = 0;
            data.Status = global.Status.Active_Status;
           product = await module.exports.add(data)
        //     .then((player) => {  
        //         product = player;
                
        //  }).catch((error) => {
        //      return false;
        //  });
      //   ; //handle foreign Admin_ID constraint
            // if(!product)
            // return false;
            // else
            product.dataValues.IsExistingMember = false;
        }
        else {
            product = member;
            product.dataValues.IsExistingMember = true;
        }
        return product;
    }

//    async add(data) {

//      await db.Members.create(data).then((player) => {  
//         return player;
//  }).catch((error) => {
//     throw error;
//  });;

    add(data){
       return db.Members.create(data); 
    }

    //   .then((player) => {  
    //         return player;
    //  }).catch((error) => {
    //      return false;
    //  });;
        
  //  }

    async update(data) {
    
        var response = await this.getbyId(data).then((user) => {
            if (!user)
             return false;
            else 
             return user.update(data);
        });
        return response;
    }

    async getallMembers(Admin_ID)
    {
        return db.Members.findAll({where: {'Admin_ID': Admin_ID, 'IsDeleted': false}});
    }
    
    // async getpaidMembers(Admin_ID)
    // {
    //     return db.Members.findAll({where: {'Admin_ID': Admin_ID, 'Fee_Status': global.Fee_Status.Paid_Status, 'IsDeleted': 0}});
    // }

    async deleteMember(data){
        var response = await this.getbyId(data).then((user) => {
            if (!user)
             return false;
            else 
             return user.update({'IsDeleted': true});
        });
        return response;
    }
}

module.exports = new memberRepository();