const express = require('express');
const router = express.Router();
const MembershipManager = require('./MembershipManager');
require("../../../app/globalValues");

router.post('/data', (req, res, next) => {

    var body = req.body;

    MembershipManager.getF(body).then((Response)=>
    { 
      if(Response.ErrorOccurred)
        return res.status(global.reqStatus.Error).send(Response.Result);
      else
        return res.status(global.reqStatus.Success).send(Response.Result);
    });
  
  });

  router.get('/getMonthlyFeeStatus',(req,res,next) => {
  
    MembershipManager.GetMemberFeeStatus(req.query).then((Response)=>
    { 
      if(Response.ErrorOccurred)
        return res.status(global.reqStatus.Error).send(Response.Result);
      else
        return res.status(global.reqStatus.Success).send(Response.Result);
    });
  
  });

  router.post('/updateFeeStatus',(req,res,next) => {
  
    MembershipManager.UpdateFeeStatus(req.body).then((Response)=>
    { 
      if(Response.ErrorOccurred)
        return res.status(global.reqStatus.Error).send(Response.Result);
      else
        return res.status(global.reqStatus.Success).send(Response.Result);
    });
  });


  router.get('/getMonthlyStatus',(req,res,next) => {
  
    MembershipManager.GetMemberStatus(req.query).then((Response)=>
    { 
      if(Response.ErrorOccurred)
        return res.status(global.reqStatus.Error).send(Response.Result);
      else
        return res.status(global.reqStatus.Success).send(Response.Result);
    });
  
  });
  

  module.exports = router;
  
