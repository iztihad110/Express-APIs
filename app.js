let express = require("express");
let app = express();
let router1 = require("./route1");
let router2 = require("./route2");
let router3 = require("./route3");

app.use('/iztihad', router1);
app.use('/iztihad', router2);
app.use('/mw', router3);
module.exports = app;