const memberRepository = require('../../../repo/memberRepository');
const common = require('../../../app/common');
const MSG = require('../../../app/common').MSG;

class MemberManager{

    Register(data)
       {
           return memberRepository.registerMember(data.Contact_No,data).then((result)=>{
               if(!result)
                   return MSG(6).then((err) => {return {"Result": err, "ErrorOccurred" : true}});
               else
                   return {"Result": result, "ErrorOccurred" : false};                 
           });
       
    }

    UpdateMember(data)
    {
            return memberRepository.update(data,data.Member_ID).then((result) => 
                {
                    if(!result)
                        return MSG(3).then((err) => {return {"Result": err, "ErrorOccurred" : true}});
                    else
                        return {"Result": result, "ErrorOccurred" : false};
                });
    }

    GetAllMembers(Admin_ID)
    {
            return memberRepository.getallMembers(Admin_ID).then((result) => 
                {
                    if(!result)
                        return MSG(3).then((err) => {return {"Result": err, "ErrorOccurred" : true}});
                    else
                        return {"Result": result, "ErrorOccurred" : false};
                });
    }

    // GetPaidMembers(Admin_ID)
    // {
    //         return memberRepository.getpaidMembers(Admin_ID).then((result) => 
    //             {
    //                 if(!result)
    //                     return MSG(3).then((err) => {return {"Result": err, "ErrorOccurred" : true}});
    //                 else
    //                     return {"Result": result, "ErrorOccurred" : false};
    //             });
    // }

    DeleteMember(data){
        return memberRepository.deleteMember(data).then((result) => 
        {
            if(!result)
                return MSG(3).then((err) => {return {"Result": err, "ErrorOccurred" : true}});
            else
                return {"Result": result, "ErrorOccurred" : false};
        });
    }


}

module.exports = new MemberManager();