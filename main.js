/**
 * Dependencies
 */

var express = require("express");
var app = express();
var path = require("path");
var MongoClient = require("mongodb").MongoClient;
var dbURL = require("./src/server/config").dbURL;
var eJuiceRoutes = require("./src/server/routes/ejuice");

/**
 * Configuration
 */

// configure serving static assets
app.use(express.static(path.join(__dirname, "/src/client/public")));

// configure routing for all eJuice api routes (via router "mini-app")
app.use(eJuiceRoutes);

/**
 * SPA Fallback - serves index.html for all requests
 */

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "/src/client/public/index.html"));
});

/**
 * connect to the database and start the server
 */

MongoClient.connect(dbURL, function (err, db) {
    if (err) {
        console.log("Error connecting to mongo:", err);
    } else {
        console.log("Connected succesfully to mongo");
        // make db available via req.app.locals
        app.locals.db = db;
        // start the server
        app.listen(3000, function () {
            console.log("Now listening on port 3000");
        });
    }
});
