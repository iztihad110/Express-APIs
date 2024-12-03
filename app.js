let express = require("express");
let app = express();
let router1 = require("./route1");
let router2 = require("./route2");
 
app.use('/iztihad', router1);
app.use('/iztihad', router2);
module.exports = app;