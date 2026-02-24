import React, { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// Simple head-attached lottie used as a small indicator next to the floating assistant.
// This component always renders (no timers) and should be placed inside a relative container.
const ThoughtBubble = ({
  src = "https://lottie.host/d6acb45b-f7d7-4112-ab69-19a1d59064d9/yQXcPMPo74.lottie",
  size = 64,
  top = -12,
  right = -12,
}) => {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const check = () => setIsSmall(window.innerWidth <= 425);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const adjustedTop = typeof top === "number" ? top - (isSmall ? 10 : 0) : top;
  const adjustedRight = typeof right === "number" ? right : right;

  return (
    <div
      className="absolute pointer-events-auto"
      style={{
        width: size,
        height: size,
        top: adjustedTop,
        right: adjustedRight,
      }}
      onClick={() => window.dispatchEvent(new CustomEvent("openChat"))}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === "Enter" || e.key === " ")
          window.dispatchEvent(new CustomEvent("openChat"));
      }}
    >
      <DotLottieReact
        src={src}
        loop
        autoplay
        className="w-full h-full"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </div>
  );
};

export default ThoughtBubble;
