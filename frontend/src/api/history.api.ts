const API_URL = "http://localhost:5050/api/history";

export async function getChatHistory() {
    const response = 
        await fetch(API_URL);
    
    if (!response.ok) {
        throw new Error(
            "Failed to load history"
        );
    }

    return await response.json();
}
