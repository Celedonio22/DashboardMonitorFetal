var express = require("express");
var app = express();
app.set("view engine", "pug");

app.get("/", (req, res) => {
    res.render("index");

});
app.get("/chart", (req, res) => {
    res.render("chart");
});


app.listen(9080);