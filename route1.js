let express = require("express");
let route = express.Router();

route.get('/', (req, res)=>{
    res.send("<h1 style = 'color: red'>India Chudi</h1>")
})

route.post('/', (req, res)=>{
    res.send("We are looking for shotruz")
})

module.exports = route;