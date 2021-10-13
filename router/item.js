let express = require("express");

let router = express.Router();

let controller = require("./controller/item");

//POST /record -body {word: "Test"}
// this will add a item to our database
router.post("./controller/item", controller)