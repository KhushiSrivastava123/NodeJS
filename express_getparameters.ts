// Import the express module
import * as express from "express";

// Create an instance of the Express application
let app: any = express();

// Define a route for handling GET requests with parameters uname and upwd
app.get("/login/uname/:uname/upwd/:upwd", (req: any, res: any) => {
    // Check if the provided uname and upwd match "admin"
    if (req.params.uname === "admin" && req.params.upwd === "admin") {
        // If the credentials are correct, send a success JSON response
        res.status(200).json({ login: "success" });
    } else {
        // If the credentials are incorrect, send a failure JSON response
        res.status(400).json({ login: "failed" });
    }
});

// Start the server and listen on port 8080
app.listen(8080, () => {
    // Log a message when the server is successfully started
    console.log("Server Started");
});
