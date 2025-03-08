import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <div className="md:flex justify-center items-center h-screen w-full">
      <Routes>
        <Route index path="/" element={<></>} />
        <Route index path="/events" element={<></>} />
        <Route index path="/results" element={<></>} />
        <Route index path="/aboutus" element={<></>} />
        <Route index path="/gallery" element={<></>} />
      </Routes>
    </div>
  )
}

export default App
