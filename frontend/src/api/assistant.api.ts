const API_URL = "http://localhost:5050/api/assistant";


interface AssistantResponse {

    success: boolean;

    answer: string;

}



export async function sendAssistantMessage(
    message: string
): Promise<AssistantResponse> {


    const response = await fetch(
        `${API_URL}/chat`,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                message
            })
        }
    );


    if(!response.ok){

        throw new Error(
            "Failed to send message"
        );

    }


    return await response.json();

}