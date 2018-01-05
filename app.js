var express = require("express");
var path = require("path");
var app = express();
app.use(express.static(path.join(__dirname,"index.html")));
var bodyParser = require("body-parser");
app.use(bodyParser.json())
// app.get('/', function(req, res){
//     res.sendFile(path.join(__dirname, '..', 'index.html'));
// });

app.listen(3000,function() {
    console.log("Started listening on port", 3000);
});