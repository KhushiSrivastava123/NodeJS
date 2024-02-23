"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import the express module
var express = require("express");
// Create an instance of Express Router
var transactions = express.Router();
// Define a route for handling GET requests to the root endpoint "/"
transactions.get("/", function (req, res) {
    // Send a JSON response with a message
    res.status(200).json({ message: "Transaction soon!" });
});
// Define another route for handling GET requests to "/happy"
transactions.get("/happy", function (req, res) {
    // Send a JSON response with a welcome message
    res.status(200).json({ message: "Welcome to Happy for Node.js!" });
});
// Export the transactions router to be used in other files
exports.default = transactions;
