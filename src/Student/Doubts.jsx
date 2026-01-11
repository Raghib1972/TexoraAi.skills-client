import { Send } from "lucide-react";
import React, { useState } from "react";

const Doubts = () => {
const [message, setMessage] = useState("");

const [chat, setChat] = useState([
    {
    sender: "student",
    text: "Sir, I am confused in React useState. Please explain?",
    time: "10:10 AM",
    },
    {
    sender: "teacher",
    text: "Sure! useState is used to store and update values inside a component.",
    time: "10:12 AM",
    },
]);

const sendMessage = () => {
    if (!message.trim()) return;

    setChat([
    ...chat,
    {
        sender: "student",
        text: message,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
    ]);

    setMessage("");
};

return (
    <div className="p-6 flex flex-col h-full max-h-screen">

    <h1 className="text-2xl font-bold mb-4">Doubts / Chat</h1>

      {/* Chat Box */}
    <div className="flex-1 bg-white rounded-xl shadow p-4 overflow-y-auto">
        {chat.map((msg, idx) => (
        <div
            key={idx}
            className={`mb-4 flex ${
            msg.sender === "student" ? "justify-end" : "justify-start"
            }`}
        >
            <div
            className={`p-3 max-w-xs rounded-xl shadow ${
                msg.sender === "student"
                ? "bg-blue-600 text-white rounded-br-none"
                : "bg-gray-200 text-gray-800 rounded-bl-none"
            }`}
            >
            <p>{msg.text}</p>
            <span className="text-xs opacity-70 block mt-1">{msg.time}</span>
            </div>
        </div>
        ))}
    </div>

      {/* Input Box */}
    <div className="flex items-center gap-3 mt-4">
        <input
        type="text"
        placeholder="Type your doubt..."
        className="flex-1 border px-4 py-2 rounded-xl focus:ring-2 focus:ring-blue-600"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />

        <button
        onClick={sendMessage}
        className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition"
        >
        <Send size={20} />
        </button>
    </div>

    </div>
);
};

export default Doubts;
