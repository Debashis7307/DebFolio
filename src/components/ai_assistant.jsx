import React, { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Chat from "./Chat";
import ThoughtBubble from "./ThoughtBubble";

const AIAssistant = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleClick = () => {
    setIsChatOpen(true);
  };

  useEffect(() => {
    const openHandler = () => setIsChatOpen(true);
    window.addEventListener("openChat", openHandler);
    return () => window.removeEventListener("openChat", openHandler);
  }, []);

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50 max-[375px]:right-2 max-[375px]:bottom-2">
        <div className="relative">
          {/* Floating AI Assistant - Clickable */}
          <div
            className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-transparent rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200"
            onClick={handleClick}
          >
            {/* Small head-attached Lottie (always visible) */}
            <ThoughtBubble size={56} top={-19} right={-15} />
            <DotLottieReact
              src="https://lottie.host/296faccc-830d-4428-bc3b-65f10580347e/wYZWNGX6ZM.lottie"
              loop
              autoplay
              className="w-full h-full"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                imageRendering: "high-quality",
              }}
            />
          </div>

          {/* Optional: Add a subtle glow effect */}
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-lg -z-10 animate-pulse"></div>
        </div>
      </div>

      {/* Chat Component */}
      <Chat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
};

export default AIAssistant;
