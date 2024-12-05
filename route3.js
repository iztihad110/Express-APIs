let express = require("express");
let route = express.Router();
let body_parser = require("body-parser");

route.use(body_parser.urlencoded({extended: false}));
route.use(body_parser.json());

route.use(express.static("styles"))

route.get('/go', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
})

module.exports = route;
