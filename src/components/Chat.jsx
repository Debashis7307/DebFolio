import React, { useState, useRef, useEffect } from "react";
import { GoogleGenAI } from "@google/genai";
import aiImage from "../assets/images/ai.png";
import boyImage from "../assets/images/boy.png";

const Chat = ({ isOpen, onClose }) => {
  const [usePersona, setUsePersona] = useState(true);
  const [conciseReply, setConciseReply] = useState(true);

  const personaData = {
    name: "Debashis Bera",
    education: {
      tenth: "93%",
      twelfth: "91%",
      graduation:
        "B.Tech CSE, Maulana Abul Kalam Azad University of Technology, CGPA 8.5",
    },
    strengths:
      "Deep knowledge of core CS fundamentals: OS, COA, DBMS, DAA, Automata, Compiler, SE, Computer Networks",
    techStack: ["C/C++", "Python", "JavaScript"],
    roles: [
      "Software Developer",
      "Gen AI Developer",
      "AI & ML",
      "Frontend Developer",
    ],
    sports: ["cricket", "football", "table tennis", "chess", "carrom"],
    favorite: {
      sport: "cricket",
      cricketer: "Rohit Sharma",
      footballer: "Cristiano Ronaldo (CR7)",
      color: "royal blue",
      foods: ["chicken biryani", "mutton biryani"],
      dessert: "ice cream",
    },
    hobbies: ["drawing portraits", "tabla", "gym"],
    travels: "Loves mountains, especially North East",
    favSong: "Jay Ho Jay Ho Sankara",
    happiestMoment: "Winning MetaMorph S-1 hackathon with my team",
    faith:
      "Devotee of Lord Mahadev; visiting temples for peace and helping the helpless",
  };

  const buildPersonaPrompt = () => {
    const p = personaData;
    return `You are Aarav, an assistant representing ${p.name}. Use the following persona details to answer questions about ${p.name} when relevant. Keep replies short, to-the-point, friendly, and concise unless asked otherwise. Persona details:\n- Education: ${p.education.graduation} (10th: ${p.education.tenth}, 12th: ${p.education.twelfth})\n- Strengths: ${p.strengths}\n- Tech stack: ${p.techStack.join(", ")}\n- Roles: ${p.roles.join(", ")}\n- Sports & hobbies: ${p.sports.join(", ")}; hobbies: ${p.hobbies.join(", ")}\n- Favorites: sport: ${p.favorite?.sport || "cricket"}, cricketer: ${p.favorite?.cricketer || "Rohit Sharma"}, footballer: ${p.favorite?.footballer || "Cristiano Ronaldo"}, color: ${p.favorite?.color || "royal blue"}\n- Favorite foods: ${p.favorite?.foods?.join(", ") || "chicken biryani"}\n- Favorite dessert: ${p.favorite?.dessert || "ice cream"}\n- Travels: ${p.travels}\n- Favorite song: ${p.favSong}\n- Happiest moment: ${p.happiestMoment}\n- Faith & values: ${p.faith}`;
  };

  const fewShotExamples = [
    {
      q: "Who is Debashis?",
      a: "Debashis Bera is a software and Gen AI developer with a B.Tech in CSE and strong core CS fundamentals.",
    },
    {
      q: "What are his top skills?",
      a: "Core CS concepts, Python, C/C++, JavaScript, and Gen AI development — concise and practical.",
    },
    {
      q: "What's his favorite sport?",
      a: "Cricket — favorite player Rohit Sharma.",
    },
  ];

  const buildFewShotText = () => {
    return fewShotExamples.map((ex) => `Q: ${ex.q}\nA: ${ex.a}`).join("\n\n");
  };

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
        import.meta.env.VITE_GEMINI_API_KEY ? "Present" : "Missing",
      );

      const ai = new GoogleGenAI({
        apiKey: import.meta.env.VITE_GEMINI_API_KEY,
      });

      const personaPrompt = usePersona
        ? buildPersonaPrompt()
        : `You are Aarav, Debashis's AI assistant.`;
      const fewShot = usePersona ? buildFewShotText() : "";
      const conciseInstruction = conciseReply
        ? "Instruction: Respond in 1-2 short sentences, concise and friendly."
        : "Instruction: Answer fully but stay friendly.";

      const prompt = `${personaPrompt}\n\n${fewShot ? "Few-shot examples:\n" + fewShot + "\n\n" : ""}${conciseInstruction}\n\nUser: ${inputText}\nAssistant:`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      console.log("API Response:", response);

      const responseText =
        response?.text ||
        "Sorry, I couldn't process your request. Please try again.";

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
              {/* Persona and concise mode are enabled by default (hidden in UI) */}
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
