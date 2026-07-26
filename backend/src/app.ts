import express from "express";
import cors from "cors";

import assistantRoutes from "./routes/assistant.routes";

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use(
    "/api/assistant",
    assistantRoutes
);

app.get("/", (req,res)=>{

    res.json({
        status:"success",
        message:"AI Business Assistant API is running"
    });

});

export default app;