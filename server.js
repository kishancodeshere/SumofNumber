const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  result = num1 + num2;
  res.send(`<center>Your Result is :- ${result}</center>`);
});
//----- contact ------//
app.get("/contact", function (req, res) {
  res.send("<h1>Contact me at my number :kishan09101@gmail.com</h1>");
});

app.get("/about", function (req, res) {
  res.send("<h1>My about is clean</h1>");
});
app.listen(3000, function () {
  console.log("port is listing in 3000");
});
