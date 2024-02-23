"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import the express module
var express = require("express");
// Import the routers from separate files
var transactions_1 = require("./transactions");
var accounts_1 = require("./accounts");
// Create an instance of the Express application
var app = express();
// Use the transactions router for paths under "/module1"
app.use("/module1", transactions_1.default);
// Use the accounts router for paths under "/module2"
app.use("/module2", accounts_1.default);
// Start the server and listen on port 8080
app.listen(8080, function () {
    console.log("Server Started");
});
