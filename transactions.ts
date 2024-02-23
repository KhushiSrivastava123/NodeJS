// Import the express module
import * as express from "express";

// Create an instance of Express Router
const transactions: express.Router = express.Router();

// Define a route for handling GET requests to the root endpoint "/"
transactions.get("/", (req: express.Request, res: express.Response): void => {
    // Send a JSON response with a message
    res.status(200).json({ message: "Transaction soon!" });
});

// Define another route for handling GET requests to "/happy"
transactions.get("/happy", (req: express.Request, res: express.Response): void => {
    // Send a JSON response with a welcome message
    res.status(200).json({ message: "Welcome to Happy for Node.js!" });
});

// Export the transactions router to be used in other files
export default transactions;
