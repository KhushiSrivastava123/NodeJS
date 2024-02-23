"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import the express module
var express = require("express");
// Create an instance of Express Router
var accounts = express.Router();
// Define a route for handling GET requests to the root endpoint "/"
accounts.get("/", function (req, res) {
    // Send a JSON response with a message
    res.status(200).json({ message: "Welcome to accounts module!" });
});
// Export the accounts router to be used in other files
exports.default = accounts;
