import { Router } from "express";
import { fetchChatHistory } from "../controllers/history.controller";

const historyRoutes = Router();
historyRoutes.get(
    "/",
    fetchChatHistory
);

export default historyRoutes;