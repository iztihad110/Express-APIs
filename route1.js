let express = require("express");
let route = express.Router();
let body_parser = require("body-parser");

route.use(body_parser.urlencoded({extended: false}));
route.use(body_parser.json());

route.get('/', (req, res)=>{
    res.send("<h1 style = 'color: red'>India Chudi</h1>")
})

route.post('/', (req, res)=>{
    res.send("We are looking for shotruz")
})

route.get('/register', (req, res)=>{
    res.sendFile(__dirname+'/form.html');
})

route.post('/register', (req, res)=>{
    let name = req.body.name;
    res.send(`<h1 style = 'color: red'>Welcome Mr ${name}</h1>`)
})

module.exports = route;