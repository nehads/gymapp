const membershipRepository = require('../../../repo/membershipRepository');
const common = require('../../../app/common');
const MSG = require('../../../app/common').MSG;

class MembershipManager{

    GetMemberFeeStatus(query)
    {
            return membershipRepository.getMemberFeeStatus(query).then((result) => 
                {
                    if(!result)
                        return MSG(3).then((err) => {return {"Result": err, "ErrorOccurred" : true}});
                    else
                        return {"Result": result, "ErrorOccurred" : false};
                });
    }

    UpdateFeeStatus(data)
    {
            return membershipRepository.update(data).then((result) => 
                {
                    if(!result)
                        return MSG(11).then((err) => {return {"Result": err, "ErrorOccurred" : true}});
                    else
                        return {"Result": result, "ErrorOccurred" : false};
                });
    }

    GetMemberStatus(userQuery)
    {
            return membershipRepository.getMemberStatus(userQuery).then((result) => 
                {
                    if(!result)
                        return MSG(3).then((err) => {return {"Result": err, "ErrorOccurred" : true}});
                    else
                        return {"Result": result, "ErrorOccurred" : false};
                });
    } 

    


}

module.exports = new MembershipManager();