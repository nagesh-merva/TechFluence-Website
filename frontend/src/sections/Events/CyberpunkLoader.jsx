import React, { useState, useEffect } from "react";
import { MousePointer2 } from "lucide-react";
import playNavSound from "@/components/PlaySound";

const CyberpunkLoader = () => {
  const [progress, setProgress] = useState(0);
  const [showChat, setShowChat] = useState(false);
  const [chatStage, setChatStage] = useState(0);
  const [cursorAnimation, setCursorAnimation] = useState(true);
  const playSound = () => playNavSound("opening")

  useEffect(() => {
    // Slow down the overall loading progress
    const intervalId = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(intervalId);
          return 100;
        }
        return prev + 0.5; // Reduced speed from 1 to 0.5 per tick
      });
    }, 60);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (progress >= 30) {
      setShowChat(true);
    }

    // Spread out the chat messages more
    if (progress >= 35 && chatStage === 0) {
      setChatStage(1); // TF's first message
    }

    if (progress >= 50 && chatStage === 1) {
      setChatStage(2); // Cursor's first response
    }

    if (progress >= 65 && chatStage === 2) {
      setChatStage(3); // Cursor's second message
    }

    if (progress >= 70 && chatStage === 3) {
      setChatStage(4); // Cursor's third message
    }

    if (progress >= 80 && chatStage === 4) {
      setChatStage(5); // TF's final message
      setCursorAnimation(false);
      const audio = new Audio()
      audio.volume = 1
      audio.src = "/sounds/opening.mp3"
      audio.play()
    }

    if (progress >= 100) {
      // Loading complete
    }
  }, [progress, chatStage]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorId = setInterval(() => {
      if (cursorAnimation) {
        setCursorAnimation((prev) => !prev);
      }
    }, 530);

    return () => clearInterval(cursorId);
  }, [cursorAnimation]);

  return (
    <div className="fixed inset-0 w-full h-full bg-black text-orange-500 font-mono flex flex-col items-center justify-center overflow-hidden">
      {/* Header */}
      <div className="fixed top-0 w-full px-6 py-4 flex justify-between border-b border-orange-700/30">
        <div className="text-lg">TECHFLUENCE VER. 27.03.2025../28.03.2025</div>
        <div className="text-lg">BIO 39.2</div>
      </div>

      {/* Status check */}
      <div className="fixed top-14 w-full px-6 py-2 flex justify-between">
        <div>STATUS CHECK................OK</div>
      </div>

      {/* Main loading container */}
      <div className="border border-orange-500/70 w-full max-w-3xl mx-auto p-8 flex flex-col items-center">
        <div className="text-xl mb-6">//SYSTEM LOADING</div>

        <div className="w-full flex items-center gap-8">
          <div className="border border-orange-500/70 px-3 py-1">PROGRESS</div>

          <div className="flex-1 h-6 bg-black border border-orange-500/70 relative">
            <div
              className="h-full bg-orange-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="text-2xl">{Math.floor(progress)}%</div>
        </div>

        <div className="mt-4 text-orange-400">&lt;UNABLE TO CANCEL&gt;</div>

        {/* Chat container */}
        {showChat && (
          <div className="mt-10 w-full border-t border-orange-500/30 pt-4 px-2">
            {chatStage >= 1 && (
              <div className="mb-3 flex items-center">
                <span className="text-green-400 mr-2">TF: </span>
                <span>Are you ready?</span>
              </div>
            )}

            {chatStage >= 2 && (
              <div className="mb-3 flex items-center">
                <span className="text-blue-400 flex items-center mr-2">
                  <MousePointer2 size={12} color="white" />:
                </span>
                <span>No..not ready</span>
              </div>
            )}

            {chatStage >= 3 && (
              <div className="mb-3 flex items-center">
                <span className="text-blue-400 flex items-center mr-2">
                  <MousePointer2 size={12} color="white" />:
                </span>
                <span>We are not ready!!</span>
              </div>
            )}

            {chatStage >= 4 && (
              <div className="mb-3 flex items-center">
                <span className="text-blue-400 flex items-center mr-2">
                  <MousePointer2 size={12} color="white" />:
                </span>
                <span>Not ready!! (ಥ﹏ಥ)</span>
              </div>
            )}

            {chatStage >= 5 && (
              <div className="mb-3 flex  items-center">
                <span className="text-green-400 mr-2">TF: </span>
                <p className="flex flex-col md:flex-row md:items-center w-full "><span className="flex items-center md:pr-2 md:space-x-2"><span>System Crashed,</span>  <MousePointer2 size={12} color="white" /></span>  Stuck... Again (≖_≖)</p>
              </div>
            )}

            {chatStage < 5 && cursorAnimation && (
              <span className="inline-block w-3 h-5 bg-orange-500 ml-1"></span>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 w-full px-6 py-3 border-t border-orange-700/30 text-xs text-orange-600">
        <div>
          CALIBRATING NEURAL UPLINK... ESTABLISHING SECURE LINK TO THE CYBER
          NETWORK.
          <br />
          PLEASE WAIT AS WE FINALIZE THE CONNECTION.
        </div>
      </div>

      {/* Decorative circles in the background */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-orange-500/20"></div>
      <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-orange-500/10"></div>

      {/* Decorative lines */}
      <div className="absolute top-1/3 w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>
      <div className="absolute bottom-1/3 w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>
    </div>
  );
};

export default CyberpunkLoader;
