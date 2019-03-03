const crypto = require("crypto");
var MSGCode = require('../models').MSGCodes;
const uuidV1 = require('uuid/v1');

class Common{
 

      //Get UUID as primary key
      get_UUID(id=null)
      {

        if(id==null)
          return uuidV1();
        
        return id;
      }

  MSG(code)
    {      
      var response = MSGCode.findOne({where: { 'Code' :code }})
      .then( (msg) => { 

        var result = {
            "Code" : msg.Code,
            "Msg" : msg.Msg,
            "Type" : msg.Type
          };

        return result;

      });
      return response;
      
    }
}

module.exports = new Common();