import { Routes, Route } from 'react-router-dom'
import TournamentsPage from './pages/TournamentsPage'
import TournamentDetailPage from './pages/TournamentDetailPage'

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Routes>
        <Route path="/" element={<TournamentsPage />} />
        <Route path="/tournaments/:slug" element={<TournamentDetailPage />} />
      </Routes>
    </div>
  )
}

export default App