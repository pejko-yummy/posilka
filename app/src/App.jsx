import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Dashboard from './pages/Dashboard'
import Exercise from './pages/Exercise'
import Food from './pages/Food'
import Sport from './pages/Sport'
import Calendar from './pages/Calendar'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <NavBar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/cvicenie" element={<Exercise />} />
            <Route path="/jedlo" element={<Food />} />
            <Route path="/sport" element={<Sport />} />
            <Route path="/kalendar" element={<Calendar />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
