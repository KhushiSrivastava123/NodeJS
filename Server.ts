// Import the express module
import * as express from "express";

// Import the routers from separate files
import transactions from "./transactions";
import accounts from "./accounts";

// Create an instance of the Express application
const app: express.Application = express();

// Use the transactions router for paths under "/module1"
app.use("/module1", transactions);

// Use the accounts router for paths under "/module2"
app.use("/module2", accounts);

// Start the server and listen on port 8080
app.listen(8080, () => {
    console.log("Server Started");
});
