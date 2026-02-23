import { useEffect, useState } from 'react'
import { getTournaments } from '../api/tournament.api'

export const useTournaments = () => {
  const [tournaments, setTournaments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const res = await getTournaments();
        if (isMounted) setTournaments(res.data);
      } catch {
        if (isMounted) setError('Failed to load tournaments');
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    }
  }, []);

  return { tournaments, loading, error };
}