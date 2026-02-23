import { useEffect, useState } from 'react'
import { getTournamentEditions } from '../api/tournament.api'

export const useTournamentEditions = (slug) => {
  const [editions, setEditions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!slug) return;

    let isMounted = true;

    const fetchEditions = async () => {
      try {
        setLoading(true);
        const res = await getTournamentEditions(slug);

        if (isMounted) {
          setEditions(res.data);
        }
      } catch {
        if (isMounted) {
          setError('Failed to load editions');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchEditions();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  return { editions, loading, error };
}