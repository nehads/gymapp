const express = require('express');
const router = express.Router();
const AdminManager = require('./AdminManager');
require("../../../app/globalValues");

router.post('/login', (req, res, next) => {

    var body = req.body;

    AdminManager.login(body).then((Response)=>
    { 
      if(Response.ErrorOccurred)
        return res.status(global.reqStatus.Error).send(Response.Result);
      else
        return res.status(global.reqStatus.Success).send(Response.Result);
    });
  
  });


  module.exports = router;
  
