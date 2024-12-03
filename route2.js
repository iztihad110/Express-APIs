let express = require("express");
let route = express.Router();
let body_parser = require("body-parser");

route.get('/route2', (req, res)=>{
    res.json(
        {
            "name": "iztihad",
            "age": 23
        }
    )
})

route.get('/route2/bb', (req, res)=>{
    res.sendFile(__dirname+"/index.html");
})

route.get('/param', (req, res)=>{
    let id = req.query.id;
    res.send(`Id is ${id}`);
})

route.get('/param/:id', (req, res)=>{
    let id = req.params.id;
    res.send(`Id is ${id}`);
})

route.use(body_parser.urlencoded({extended: false}));
route.use(body_parser.json());

route.post('/user', (req, res)=>{
    let name = req.body.name;
    res.send(`Welcome Mr ${name}`);
})
module.exports = route;