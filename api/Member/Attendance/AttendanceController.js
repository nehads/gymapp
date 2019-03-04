const express = require('express');
const router = express.Router();
const AttendanceManager = require('./AttendanceManager');
require("../../../app/globalValues");

// router.post('/update', (req,res,next) => {
//     var body = req.body;

//     AttendanceManager.MarkAttendance(body).then((Response) => {
//         if(Response.ErrorOccured)
//         return res.status(global.reqStatus.Error).send(Response.Result);
//         else
//         return res.status(global.reqStatus.Success).send(Response.Result);
//     });
// });

router.post('/update', (req, res, next) => {

    var body = req.body;

    AttendanceManager.MarkAttendance(body).then((Response)=>
    { 
      if(Response.ErrorOccurred)
        return res.status(global.reqStatus.Error).send(Response.Result);
      else
        return res.status(global.reqStatus.Success).send(Response.Result);
    });
  
  });

  module.exports = router;
