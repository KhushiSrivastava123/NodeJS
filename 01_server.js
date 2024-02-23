let http = require("http");
let Server = http.createServer ((req,res) => {
    res.write("<h1> My Server </h1>");
    res.end();
});
Server.listen(8080);
console.log("Server started");
