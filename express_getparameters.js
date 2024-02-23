"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get("/login/uname/:uname/upwd/:upwd", function (req, res) {
    if (req.params.uname === "admin" && req.params.upwd === "admin") {
        res.status(200).json({ login: "success" });
    }
    else {
        res.status(400).json({ login: "failed" });
    }
});
app.listen(8080, function () {
    console.log("Server Started");
});
