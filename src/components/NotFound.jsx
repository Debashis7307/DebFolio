import React, { useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousBodyHeight = document.body.style.height;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousHtmlHeight = document.documentElement.style.height;

    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.height = "100vh";

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.body.style.height = previousBodyHeight;
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.documentElement.style.height = previousHtmlHeight;
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-screen bg-white text-gray-800 overflow-hidden flex flex-col items-center justify-center px-4 py-6">
      <div className="w-full max-w-md md:max-w-xl mx-auto">
        <DotLottieReact
          src="https://lottie.host/98b83970-d606-450a-8739-62585c0d7a39/G2jwTtdyIY.lottie"
          loop
          autoplay
        />
      </div>

      <h1 className="mt-4 text-2xl md:text-4xl font-semibold tracking-tight text-center">
        404 - Page Not Found
      </h1>
      <p className="mt-2 text-sm md:text-base text-gray-600 text-center max-w-md">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      <div className="mt-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
