var express = require("express");
var mysql = require("./mysql.js");
var userModel = require("./models/usuario.js");


var app = express();


app.set("view engine", "pug");
app.get("/", (req, res) => {
    res.render("index");
    mysql.database();
});
app.get("/chart", (req, res) => {
    res.render("chart");
    userModel.userCreate("Paco", "Camacho");
});


app.listen(9080);