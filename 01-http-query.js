const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'text/html'});

    let obj = url.parse(req.url, true).query;

    if (obj.uname === "khushi" && obj.upwd === "happy") {
        res.write("<h1>Login Successfully</h1>");
    } else {
        res.write("<h1>Login Failed</h1>");
    }

    res.end();
});

server.listen(8080);
console.log("Server is running");
