var express = require("express");
var app = express();
var path = require("path");

// configure serving static assets
app.use(express.static(path.join(__dirname, "/src/client/public")));

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "/src/client/public/index.html"));
});

app.listen(3000, function () {
    console.log("Now listening on port 3000");
});
