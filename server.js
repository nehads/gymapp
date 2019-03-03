const http = require('http');
const app = require('./app');
const port = process.env.port || 3000;

const server =  http.createServer(app);

var router=require("./app/routes");

console.log("App running");
server.listen(port);