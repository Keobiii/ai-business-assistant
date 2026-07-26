import UserMessage from "./components/UserMessage";
import AIResponse from "./components/AIResponse";
import { use, useEffect, useState } from "react";
import { sendAssistantMessage } from "../../api/assistant.api";
import { getChatHistory } from "../../api/history.api";


interface Message {
    role: "user" | "assistant";
    content: string;
}



export default function Assistant() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function loadHistory() {
            const result = 
                await getChatHistory();

            if (result.success) {
                const formatted = 
                    result.data.flatMap(
                        (item: any) => [
                            {
                                role: "user",
                                content: item.user_message
                            },
                            {
                                role: "assistant",
                                content: item.ai_response
                            }
                        ]
                    );
                setMessages(formatted);
            }
        }

        loadHistory();
    }, []);

    async function handleSend() {
        if (!input.trim()) return;

        const userMessage = input;

        setMessages(prev=>[
            ...prev,
            {
                role:"user",
                content:userMessage
            }
        ]);

        setInput("");
        setLoading(true);

        try {
            const response = await sendAssistantMessage(userMessage);

            setMessages(prev=>[
                ...prev,
                {
                    role:"assistant",
                    content: response.answer
                }
            ]);
        } catch (error) {
            setMessages(prev=>[
                ...prev,
                {
                    role:"assistant",
                    content: "Something went wrong."
                }
            ]);
        }

        setLoading(false);
    }

    return (

        <div className="
            flex
            flex-col
            h-[calc(100vh-3rem)]
        ">


            {/* Header */}

            <div className="
                mb-5
            ">

                <h1 className="
                    text-3xl
                    font-bold
                ">
                    AI Business Assistant
                </h1>

                <p className="
                    text-gray-500
                    mt-1
                ">
                    Ask questions about your business data.
                </p>

            </div>



            {/* Chat Area */}

            <div
                className="
                    flex-1
                    overflow-y-auto
                    bg-gray-50
                    rounded-xl
                    p-5
                "
            >

               {
                    messages.map(
                        (message, index) => (
                            message.role === "assistant" ? (
                                <AIResponse
                                    key={index}
                                    message={message.content}/>
                            ) : (
                                <UserMessage
                                    key={index}
                                    message={message.content}/>
                            )
                        )
                    )

               }

               {

                    loading && (
                        <AIResponse
                            message="AI is thinking..."/>
                    )

               }


            </div>



            {/* Input */}

            <div className="
                mt-4
                flex
                gap-3
            ">

                <input
                    type="text"
                    placeholder="Ask about your business..."
                    className="
                        flex-1
                        rounded-xl
                        border
                        border-gray-300
                        px-4
                        py-3
                        focus:outline-none
                        focus:ring-2
                        focus:ring-blue-500
                    "
                    value={input}
                    onChange={
                        (e) => setInput(e.target.value)
                    }
                    onKeyDown={
                        (e) => {
                            if (e.key === "Enter") {
                                handleSend();
                            }
                        }
                    }
                />


                <button
                    onClick={handleSend}
                    className="
                        bg-blue-600
                        text-white
                        px-6
                        rounded-xl
                        hover:bg-blue-700
                    "
                >
                    Send
                </button>


            </div>


        </div>

    )
}