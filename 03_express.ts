

import * as express from "express";

let app: any = express();

app.get("/happy", (req: any, res: any): any => {
    res.status(200).json({ "message": "Welcome to TypeScript" });
});

app.listen(8080, () => {
    console.log("Server successfully started on port no. 8080");
});
