import React, { useState, useRef, useEffect } from "react";
import aiImage from "../assets/images/ai.png";
import boyImage from "../assets/images/boy.png";

const Chat = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      text: "Hey! I'm Aarav, Debashis's Personal AI assistant. How can I assist you...?",
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      type: "user",
      text: inputText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsLoading(true);

    try {
      console.log(
        "API Key:",
        import.meta.env.VITE_GEMINI_API_KEY ? "Present" : "Missing"
      );

      // Try using fetch directly to test the API
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${
          import.meta.env.VITE_GEMINI_API_KEY
        }`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `You are Aarav, Debashis's AI assistant. Give brief, concise answers. User question: ${inputText}`,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      console.log("API Response:", data);

      let responseText =
        "Sorry, I couldn't process your request. Please try again.";

      if (data.candidates && data.candidates[0] && data.candidates[0].content) {
        responseText = data.candidates[0].content.parts[0].text;
      }

      const botMessage = {
        id: Date.now() + 1,
        type: "bot",
        text: responseText,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("AI Error:", error);
      const errorMessage = {
        id: Date.now() + 1,
        type: "bot",
        text: `Error: ${error.message}. Please try again.`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop with glass effect */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Chat Container */}
      <div className="relative w-full max-w-2xl mx-4 bg-gray-900/95 backdrop-blur-md rounded-2xl border border-gray-700/50 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-400 to-green-600 p-0.5 shadow-lg">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src={aiImage}
                  alt="AI"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h3 className="text-green-400 font-semibold">
                Aarav - Deb's AI Assistant
              </h3>
              <p className="text-gray-400 text-sm">Chat with Aarav</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Messages Container */}
        <div className="h-96 overflow-y-auto p-4 space-y-4 scrollbar-hide">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex items-start space-x-3 max-w-[80%] ${
                  message.type === "user"
                    ? "flex-row-reverse space-x-reverse"
                    : ""
                }`}
              >
                {/* Avatar */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden ${
                    message.type === "user"
                      ? "bg-gradient-to-br from-blue-400 to-blue-600 p-0.5 shadow-lg"
                      : ""
                  }`}
                >
                  <div
                    className={`w-full h-full rounded-full overflow-hidden ${
                      message.type === "user" ? "" : "p-0"
                    }`}
                  >
                    <img
                      src={message.type === "user" ? boyImage : aiImage}
                      alt={message.type === "user" ? "User" : "AI"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Message */}
                <div
                  className={`px-4 py-2 rounded-lg ${
                    message.type === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-800 text-green-400 border border-green-500/30"
                  }`}
                >
                  <p className="text-sm font-mono">{message.text}</p>
                  <p className="text-xs opacity-50 mt-1">
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Loading indicator */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src={aiImage}
                      alt="AI"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="bg-gray-800 text-green-400 border border-green-500/30 px-4 py-2 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-green-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-green-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-700/50">
          <div className="flex space-x-3">
            <div className="flex-1 relative">
              <textarea
                ref={inputRef}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message... "
                className="w-full bg-gray-800 text-green-400 border border-green-500/30 rounded-lg px-4 py-3 font-mono text-sm resize-none focus:outline-none focus:border-green-400 terminal-cursor"
                rows={2}
                disabled={isLoading}
              />
            </div>
            <button
              onClick={handleSendMessage}
              disabled={!inputText.trim() || isLoading}
              className="relative bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 disabled:from-gray-600 disabled:to-gray-500 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 border border-green-400/30"
            >
              <span className="relative z-10">Send</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-transparent rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
