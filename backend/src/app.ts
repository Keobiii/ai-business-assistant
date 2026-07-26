import express from "express";
import cors from "cors";

import assistantRoutes from "./routes/assistant.routes";
import historyRoutes from "./routes/history.routes";

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use(
    "/api/assistant",
    assistantRoutes
);

app.use(
    "/api/history",
    historyRoutes
);

app.get("/", (req,res)=>{

    res.json({
        status:"success",
        message:"AI Business Assistant API is running"
    });

});

export default app;