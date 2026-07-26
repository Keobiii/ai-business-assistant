import Groq from "groq-sdk";
import { GROQ_API_KEY } from "../config/env";

const groq = new Groq({
    apiKey: GROQ_API_KEY
});

export async function askAI(
    systemPrompt: string,
    userPrompt: string
) {
    const response = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        temperature: 0.2,
        messages: [
            {
                role: "system",
                content: systemPrompt
            },
            {
                role: "user",
                content: userPrompt
            }
        ]
    });

    return response.choices[0].message.content;
}