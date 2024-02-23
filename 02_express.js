const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
    res.status(200).json({ "message": "default" });
});

app.get("/demo", (req, res) => {
    res.status(200).json({ "message": "mongodb" });
});

app.post("/", (req, res) => {
    res.status(200).json({ "message": "default" });
});

app.post("/demo", (req, res) => {
    res.status(200).json({ "message": "Cassandra" });
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});




