/**
 * Router mini-app for all eJuice related routing
 * See http://expressjs.com/en/guide/routing.html
 * for details
 */

var express = require("express");
var router = express.Router();
var database = require("../services/database");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

// route middleware shared by all routes in this mini-app
router.use(function (req, res, next) {
    console.log("Time: ", Date.now());
    next();
});

// get all ejuice docs
router.get("/api/v1/ejuice", function (req, res) {

});

// insert ejuice doc
router.post("/api/v1/ejuice", jsonParser, function (req, res) {
    console.log("req.app.locals.db =", req.app.locals.db);
    console.log("req.body", req.body);
    database.insert(req.app.locals.db, req.body, function (err, result) {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            // return the doc which now contains the generated _id
            res.status(200).json({ doc: result.ops[0] });
        }
    });
});

// chainable route path
router.route("/api/v1/ejuice/:id")
    // get ejuice doc
    .get(function (req, res) { })
    // update ejuice doc
    .put(function (req, res) { })
    // delete ejuice doc
    .delete(function (req, res) { });

module.exports = router;