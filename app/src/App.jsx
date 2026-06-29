import { HashRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Dashboard from './pages/Dashboard'
import Exercise from './pages/Exercise'
import Food from './pages/Food'
import Sport from './pages/Sport'
import Calendar from './pages/Calendar'
import Gyms from './pages/Gyms'

function App() {
  return (
    <HashRouter>
      <video
        className="bg-video"
        autoPlay
        loop
        muted
        playsInline
        src="https://videos.pexels.com/video-files/3129208/3129208-hd_1280_720_25fps.mp4"
      />
      <div className="app-shell">
        <NavBar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/cvicenie" element={<Exercise />} />
            <Route path="/jedlo" element={<Food />} />
            <Route path="/sport" element={<Sport />} />
            <Route path="/kalendar" element={<Calendar />} />
            <Route path="/fitka" element={<Gyms />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  )
}

export default App
