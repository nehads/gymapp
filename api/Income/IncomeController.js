const express = require('express');
const router = express.Router();
const IncomeManager = require('./IncomeManager');
require("../../app/globalValues");

router.get('/getTotalIncome', (req, res, next) => {

    var query = req.query;

    IncomeManager.getIncome(query).then((Response)=>
    { 
      if(Response.ErrorOccurred)
        return res.status(global.reqStatus.Error).send(Response.Result);
      else
        return res.status(global.reqStatus.Success).send(Response.Result);
    });
  
  });

module.exports = router;


