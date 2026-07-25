interface UserMessageProps {
    message: string;
}

export default function UserMessage({
    message
} : UserMessageProps) {
    return (
        <div className="flex justify-end mb-4">
            <div className="max-w-[70%] bg-blue-600 text-white px-4 py-3 rounded-2xl rounded-br-md text-sm">
                {message}
            </div>
        </div>
    );
}