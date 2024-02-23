// Import the express module
import * as express from "express";

// Create an instance of Express Router
const accounts: express.Router = express.Router();

// Define a route for handling GET requests to the root endpoint "/"
accounts.get("/", (req: express.Request, res: express.Response): void => {
    // Send a JSON response with a message
    res.status(200).json({ message: "Welcome to accounts module!" });
});

// Export the accounts router to be used in other files
export default accounts;
