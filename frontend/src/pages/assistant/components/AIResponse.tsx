interface AIResponseProps {
    message: string;
}


export default function AIResponse({
    message
}: AIResponseProps){

    return (

        <div className="flex justify-start mb-4">

            <div
                className="
                    max-w-[70%]
                    bg-white
                    border
                    border-gray-200
                    text-gray-800
                    px-4
                    py-3
                    rounded-2xl
                    rounded-bl-md
                    text-sm
                    shadow-sm
                "
            >

                <div className="
                    font-semibold
                    text-gray-700
                    mb-1
                ">
                    AI Assistant
                </div>


                <p>
                    {message}
                </p>


            </div>

        </div>

    );
}