import { Link } from 'react-router-dom'
import { useTournaments } from '../hooks/useTournaments'

const TournamentsPage = () => {
  const { tournaments, loading, error } = useTournaments();

  if (loading) return <div className="p-10">Loading tournaments...</div>;
  if (error) return <div className="p-10 text-red-500">{error}</div>;

  return (
    <div className="p10">
      <h1 className="text-3xl font-bold mb-6">Tournaments</h1>

      <div className="space-y-4">
        {tournaments.map((t) => (
          <Link 
            key={t._id}
            to={`/tournaments/${t.slug}`}
            className="block p-4 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition"
          >
            {t.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default TournamentsPage