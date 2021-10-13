// this is a express app
let express = require("express");
let env = require("dotenv").config();
let app = express();

// enabling the application to be able to parse json bodies in post/put
app.use(express.json());

// i want to use a router
//let itemRoute = require("./router/item")
//app.use(itemRoute);

require("./db/db")

let port = process.env.PORT;

app.listen(port, function(){
    console.log("Starting the app server on port", port)
});

module.exports=express