"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import the express module
var express = require("express");
var bodyparser = require("body-parser");
// Create an instance of the Express application
var app = express();
// Set MIME type for JSON
app.use(bodyparser.json());
// Parse form data from the client (set extended to false for simple parsing)
app.use(bodyparser.urlencoded({ extended: false }));
// Authorization middleware
var auth = function (req, res, next) {
    // Extract all headers from the incoming request
    var allHeaders = req.headers;
    var token = allHeaders.token;
    // Check if the 'token' header is equal to "Happy"
    if (token === "Happy") {
        // If the token is valid, proceed to the next middleware or route handler
        next();
    }
    else {
        // If the token is not valid, send a JSON response with a 401 status code (Unauthorized)
        res.status(401).json({ auth: "failed" });
    }
};
// Authentication route
app.post("/login", function (req, res) {
    // Check if the provided 'uname' and 'upwd' match "admin"
    if (req.body.uname === "admin" && req.body.upwd === "admin") {
        // If the credentials are correct, send a success JSON response with a 200 status code (OK)
        res.status(200).json({ login: "success" });
    }
    else {
        // If the credentials are incorrect, send a failure JSON response with a 401 status code (Unauthorized)
        res.status(401).json({ login: "failed" });
    }
});
// Start the server and listen on the specified port or default to 8080
app.listen(process.env.PORT || 8080, function () {
    // Log a message when the server is successfully started
    console.log("Server Started");
});
