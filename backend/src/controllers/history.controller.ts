import { Request, Response } from "express";
import { getChatHistory } from "../services/chat-history.services";

export async function fetchChatHistory(
    request: Request,
    response: Response
) {
    try {
        const history =
            await getChatHistory();

        response.json({
            success: true,
            data: history
        });
    } catch (error) {
        console.error(error);
        response.status(500).json({
            success: false,
            message: "Failed to retrieve chat history"
        });
    }
}