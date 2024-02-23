"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get("/happy", function (req, res) {
    res.status(200).json({ "message": "Welcome to TypeScript" });
});
app.listen(8080, function () {
    console.log("Server successfully started on port no. 8080");
});
