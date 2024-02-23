// Import the express module
import * as express from "express";

// Create an instance of the Express application
let app: any = express();

// Authorization middleware
let auth = (req: any, res: any, next: any): any => {
    // Extract all headers from the incoming request
    let allHeaders = req.headers;
    // Check if the 'token' header is equal to "ashokIT"
    if (allHeaders.token === "ashokIT") {
        // If the token is valid, proceed to the next middleware or route handler
        next();
    } else {
        // If the token is not valid, send a JSON response with a 500 status code (Internal Server Error)
        res.status(500).json({ auth: "failed" });
    }
};

// Authentication route
// Define a route for handling GET requests with parameters 'uname' and 'upwd'
app.get("/login", [auth], (req: any, res: any): any => {
    // Check if the provided 'uname' and 'upwd' match "admin"
    if (req.query.uname === "admin" && req.query.upwd === "admin") {
        // If the credentials are correct, send a success JSON response with a 201 status code (Created)
        res.status(201).json({ login: "success" });
    } else {
        // If the credentials are incorrect, send a failure JSON response with a 401 status code (Unauthorized)
        res.status(401).json({ login: "failed" });
    }
});
//default request

app.get("/",(req: any, res: any) => {
    res.sendFile("D:/Nodejs/getparameters/index.html")

});
// Start the server and listen on port 8080
app.listen(8080, () => {
    // Log a message when the server is successfully started
    console.log("Server Started");
});


//http://localhost:8080/login?uname=admin&upwd=admin with get request and set token=ashokIT on the headers of postman 