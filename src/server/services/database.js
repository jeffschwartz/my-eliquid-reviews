/**
 * Database operations via MongoDB
 * Note: the database connection is established
 * in main.js and the connection is stored in
 * app.locals making it accessible via req.app.locals.db.
 */

var collection = require("../config").eJuiceCollection;

console.log("collection =", collection);

var getAll = function (db, callback) {
    console.log("getting all ejuices");
    db.collection(collection).find({}).toArray(function (err, docs) {
        if (err) {
            console.log("Database error getting all ejuices: ", err);
            callback(err);
        } else {
            console.log("the result of find({}) = ", docs);
            callback(null, docs);
        }
    });
};

var insert = function (db, eJuice, callback) {
    console.log("inserting ejJuice = ", eJuice);

    db.collection(collection).insertOne(eJuice, { w: "majority" }, function (err, result) {
        if (err) {
            console.log("Database error inserting ejuice: ", err);
            callback(err);
        } else {
            console.log("the result of insertOne = ", result);
            callback(null, result);
        }
    });
};

module.exports = {
    getAll: getAll,
    insert: insert
};