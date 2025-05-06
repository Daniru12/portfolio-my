import { useState, useEffect } from "react";

export const LoadingScreen = () => {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Daniru Ranathunga";
  const [progress, setProgress] = useState(0);

  // Typewriter effect
  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    let timer;

    const type = () => {
      if (!isDeleting && currentIndex <= fullText.length) {
        setText(fullText.substring(0, currentIndex));
        currentIndex++;
        timer = setTimeout(type, 100);
      } else if (isDeleting && currentIndex >= 0) {
        setText(fullText.substring(0, currentIndex));
        currentIndex--;
        timer = setTimeout(type, 50);
      } else {
        isDeleting = !isDeleting;
        timer = setTimeout(type, isDeleting ? 500 : 1000);
      }
    };

    timer = setTimeout(type, 500);

    return () => clearTimeout(timer);
  }, []);

  // Cursor blink effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(blinkInterval);
  }, []);

  // Progress bar animation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black">
      {/* Particles effect */}

      {/* Logo placeholder */}
      <div className="mb-8 relative">
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
          <img
            src="https://i.postimg.cc/4y7rhnnd/daniru.jpg"
            alt="DR"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div className="absolute -inset-1 rounded-full border border-blue-500/30 animate-pulse" />
      </div>

      {/* Name with typewriter effect */}
      <div className="mb-6 text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        {text}
        <span
          className={`${
            showCursor ? "opacity-100" : "opacity-0"
          } transition-opacity`}
        >
          _
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-64 md:w-80 h-1 bg-gray-800 rounded-full relative overflow-hidden mt-2">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.7)]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Status text */}
      <div className="mt-4 text-sm text-gray-400 font-mono">
        {progress < 33 && "Initializing..."}
        {progress >= 33 && progress < 66 && "Loading resources..."}
        {progress >= 66 && progress < 99 && "Preparing environment..."}
        {progress >= 99 && "Ready to launch..."}
      </div>
    </div>
  );
};
