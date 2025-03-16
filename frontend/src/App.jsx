import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import EventsPage from "./pages/EventsPage";
import ResultsPage from "./pages/ResultsPage";
import AboutCouncil from "./pages/AboutCouncil";
import CyberpunkLoader from "@/sections/Events/CyberpunkLoader";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import GalleryPage from "./pages/GalleryPage";

function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const [loading, setLoading] = useState(() => {
    const sessionLoading = sessionStorage.getItem('loading')
    return sessionLoading ? JSON.parse(sessionLoading) : true
  })

  useEffect(() => {
    sessionStorage.setItem('loading', JSON.stringify(loading))
  }, [loading])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 12000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <CyberpunkLoader />
  }

  return (
    <div className="h-full w-full">
      <Routes>
        <Route index path="/" element={<LandingPage />} />
        <Route index path="/events" element={<EventsPage />} />
        <Route index path="/results" element={<ResultsPage />} />
        <Route index path="/aboutus" element={<AboutCouncil />} />
        <Route index path="/gallery" element={<GalleryPage />} />
      </Routes>
    </div>
  );
}

export default App;
