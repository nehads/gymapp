const express = require('express');
const Middleware	= require('./app/middleware');
const Routes	= require('./app/routes');
const ErrorHandling	= require('./app/errorhandling');

class appServer
{
    constructor() {
        this.app = express();
        Middleware.init(this.app);
        Routes.init(this.app);
        ErrorHandling.init(this.app);
    }
    
}

module.exports = new appServer().app;