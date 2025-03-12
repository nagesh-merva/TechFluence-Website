import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import EventsPage from "./pages/EventsPage"

function App() {

  return (
    <div className="md:flex justify-center items-center h-full w-full overflow-y-visible">
      <Routes>
        <Route index path="/" element={<LandingPage />} />
        <Route index path="/events" element={<EventsPage />} />
        <Route index path="/results" element={<></>} />
        <Route index path="/aboutus" element={<></>} />
        <Route index path="/gallery" element={<></>} />
      </Routes>
    </div>
  )
}

export default App
