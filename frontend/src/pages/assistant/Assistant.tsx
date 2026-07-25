import UserMessage from "./components/UserMessage";
import AIResponse from "./components/AIResponse";


export default function Assistant(){

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

                <AIResponse
                    message="
                    Hello! I can help you analyze your business data.
                    You can ask about sales, inventory, customers, and reports.
                    "
                />


                <UserMessage
                    message="
                    Which products are running low?
                    "
                />


                <AIResponse
                    message="
                    Based on the current inventory, 3 products are below the minimum stock level.
                    I recommend creating a purchase order for these items.
                    "
                />


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
                />


                <button
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