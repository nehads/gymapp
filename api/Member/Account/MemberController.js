const express = require('express');
const router = express.Router();
const MemberManager = require('./MemberManager');
require("../../../app/globalValues");

router.post('/register', (req, res, next) => {

  var body = req.body;

  MemberManager.Register(body).then((Response) => {
    if (Response.ErrorOccurred)
      return res.status(global.reqStatus.Error).send(Response.Result);
    else
      return res.status(global.reqStatus.Success).send(Response.Result);
  });

});

router.post('/update', (req, res, next) => {

  var body = req.body;

  MemberManager.UpdateMember(body).then((Response) => {
    if (Response.ErrorOccurred)
      return res.status(global.reqStatus.Error).send(Response.Result);
    else
      return res.status(global.reqStatus.Success).send(Response.Result);
  });

});

router.get('/getAllMembers', (req, res, next) => {

  var Admin_ID = req.query.Admin_ID;

  MemberManager.GetAllMembers(Admin_ID).then((Response) => {
    if (Response.ErrorOccurred)
      return res.status(global.reqStatus.Error).send(Response.Result);
    else
      return res.status(global.reqStatus.Success).send(Response.Result);
  });

});

// router.get('/getPaidMembers', (req, res, next) => {

//   var Admin_ID = req.query.Admin_ID;

//   MemberManager.GetPaidMembers(Admin_ID).then((Response) => {
//     if (Response.ErrorOccurred)
//       return res.status(global.reqStatus.Error).send(Response.Result);
//     else
//       return res.status(global.reqStatus.Success).send(Response.Result);
//   });

// });

router.post('/deleteMember', (req, res,next) =>{
  var body = req.body;

  MemberManager.DeleteMember(body).then((Response) => {
    if (Response.ErrorOccurred)
      return res.status(global.reqStatus.Error).send(Response.Result);
    else
      return res.status(global.reqStatus.Success).send(Response.Result);
  });

});


module.exports = router;

