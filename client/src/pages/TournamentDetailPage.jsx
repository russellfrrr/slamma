import { useParams, Link } from 'react-router-dom'
import { useTournamentEditions } from '../hooks/useTournamentEditions'

const TournamentDetailPage = () => {
  const { slug } = useParams();
  const { editions, loading, error } = useTournamentEditions(slug);

  if (loading) {
    return <div className="p-10">Loading editions...</div>;
  }

  if (error) {
    return <div className="p-10 text-red-500">{error}</div>;
  }

  return (
    <div className="p-10">
      <Link
        to="/"
        className="text-blue-400 underline mb-6 inline-block"
      >
        ← Back to tournaments
      </Link>

      <h1 className="text-3xl font-bold mb-6 capitalize">
        {slug.replace('-', ' ')}
      </h1>

      <div className="space-y-4">
        {editions.map((edition) => (
          <div
            key={edition._id}
            className="p-4 bg-neutral-800 rounded-lg"
          >
            {edition.year} — {edition.tour}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TournamentDetailPage