import database from "../config/database";

export async function saveChatHistory(
    userMessage: string,
    aiResponse: string | null,
    toolUsed?: string | null
) {
    const sql = `
        INSERT INTO ai_chat_history
        (
            user_message,
            ai_response,
            tool_used
        )
        VALUES (?, ?, ?)
    `;

    await database.execute(
        sql,
        [
            userMessage,
            aiResponse,
            toolUsed ?? null
        ]
    );
}

export async function getChatHistory() {
    const sql = `
        SELECT
            id,
            user_message,
            ai_response,
            tool_used,
            created_at
        FROM ai_chat_history
        ORDER BY id ASC
    `;

    const [rows] = await database.execute(sql);
    
    return rows;
}