import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import LandingPage from "./pages/LandingPage";
import EventsPage from "./pages/EventsPage";
import CyberpunkLoader from "./sections/Events/CyberpunkLoader";
import ResultsPage from "./pages/ResultsPage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Increased timer duration to ensure loader completes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 12000); // 12 seconds to allow full animation

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <CyberpunkLoader />;
  }

  // Render routes when loading is complete
  return (
    <div className="h-full w-full">
      <Routes>
        <Route index path="/" element={<LandingPage />} />
        <Route index path="/events" element={<EventsPage />} />
        <Route index path="/results" element={<ResultsPage />} />
        <Route index path="/aboutus" element={<></>} />
        <Route index path="/gallery" element={<></>} />
      </Routes>
    </div>
  );
}

export default App;
