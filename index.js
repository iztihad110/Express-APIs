let app = require("./app");
let port = 3000;
let host = '127.0.0.1';

app.listen(port, host, ()=>{
    console.log(`The server started at http://${host}:${port}`);
})