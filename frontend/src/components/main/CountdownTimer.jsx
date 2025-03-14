import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const targetDate = new Date("March 27, 2025 00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(targetDate - Date.now());
    }, 1000);

    // Create a blinking effect for retrofuturistic feel
    const blinkTimer = setInterval(() => {
      setBlink((prev) => !prev);
    }, 1200);

    return () => {
      clearInterval(timer);
      clearInterval(blinkTimer);
    };
  }, [timeLeft]);

  // Split the time into individual units for more stylized display
  const getTimeUnits = (ms) => {
    if (ms <= 0)
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };

    const totalSeconds = Math.floor(ms / 1000);
    return {
      days: String(Math.floor(totalSeconds / 86400)).padStart(2, "0"),
      hours: String(Math.floor((totalSeconds % 86400) / 3600)).padStart(2, "0"),
      minutes: String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0"),
      seconds: String(totalSeconds % 60).padStart(2, "0"),
    };
  };

  const timeUnits = getTimeUnits(timeLeft);

  return (
    <div className="relative flex justify-center items-center h-44 w-full overflow-hidden">
      {/* Main container - keep overall size the same */}
      <div className="relative px-3 py-2 bg-black border-2 border-green-500 rounded-lg shadow-lg z-10 w-auto min-w-64 animate-pulse">
        <div className="absolute inset-0 shadow-[0_0_10px_rgba(0,255,0,0.4)] rounded-lg"></div>

        {/* Coming Soon text - slightly more compact */}
        <div className="text-center mt-2 mb-4">
          <div className="text-xl font-mono font-semibold text-green-400 tracking-wider drop-shadow-[0_0_2px_rgba(0,255,0,0.5)]">
            ARE YOU READY?!
          </div>
        </div>

        {/* Time display with larger blocks but tighter spacing */}
        <div className="flex justify-between space-x-2">
          {Object.entries(timeUnits).map(([unit, value]) => (
            <div key={unit} className="flex flex-col items-center">
              <div className="bg-black border-2 border-green-600 rounded px-1 py-2 w-16 h-16 flex items-center justify-center">
                <span className="text-2xl font-mono font-bold text-green-400 drop-shadow-[0_0_3px_rgba(0,255,0,0.7)]">
                  {value}
                </span>
              </div>
              <span className="text-xs font-mono uppercase text-green-500 mt-1">
                {unit.substring(0, 1)}
              </span>
            </div>
          ))}
        </div>

        {/* Status indicator */}
        <div className="mt-1 flex justify-between items-center">
          <div className="h-1 w-1 rounded-full bg-red-500 shadow-[0_0_4px_rgba(255,0,0,0.7)]"></div>
          <div
            className={`text-[8px] font-mono text-green-400 ${
              blink ? "opacity-100" : "opacity-60"
            }`}
          >
            T-MINUS
          </div>
          <div
            className={`h-1 w-1 rounded-full ${
              blink
                ? "bg-green-500 shadow-[0_0_4px_rgba(0,255,0,0.7)]"
                : "bg-green-900"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
}
