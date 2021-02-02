var express = require("express");
var app = express();
var mysql = require("mysql");
app.set("view engine","ejs");

app.get("/yacine", function(req,res){
    res.render("sym")
})
app.listen(3000);
console.log("http://localhost:3000/yacine")