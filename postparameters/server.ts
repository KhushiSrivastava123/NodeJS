// Import the express module
import * as express from "express";
import * as bodyparser from "body-parser";

// Create an instance of the Express application
let app: any = express();

// Set MIME type for JSON
app.use(bodyparser.json());

// Parse form data from the client (set extended to false for simple parsing)
app.use(bodyparser.urlencoded({ extended: false }));

// Authorization middleware
let auth: any = (req: any, res: any, next: any): any => {
    // Extract all headers from the incoming request
    let allHeaders = req.headers;
    let token: any = allHeaders.token;

    // Check if the 'token' header is equal to "Happy"
    if (token === "Happy") {
        // If the token is valid, proceed to the next middleware or route handler
        next();
    } else {
        // If the token is not valid, send a JSON response with a 401 status code (Unauthorized)
        res.status(401).json({ auth: "failed" });
    }
};

// Authentication route
app.post("/login", (req: any, res: any): any => {
    // Check if the provided 'uname' and 'upwd' match "admin"
    if (req.body.uname === "admin" && req.body.upwd === "admin") {
        // If the credentials are correct, send a success JSON response with a 200 status code (OK)
        res.status(200).json({ login: "success" });
    } else {
        // If the credentials are incorrect, send a failure JSON response with a 401 status code (Unauthorized)
        res.status(401).json({ login: "failed" });
    }
});

// Start the server and listen on the specified port or default to 8080
app.listen(process.env.PORT || 8080, () => {
    // Log a message when the server is successfully started
    console.log("Server Started");
});



/*to check this code we used postman api by setting :

Header>>> token = Happy 
 body>>> raw>>> json:
 {
    "uname": "admin",
    "upwd": "admin"
}

|| Post || http://localhost:8080/login */
