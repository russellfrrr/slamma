import api from '../lib/api.js';

// fetch all tournaments
export const getTournaments = async () => {
  const response = await api.get('/tournaments');
  return response.data;
}

// fetch all editions of a tournament
export const getTournamentEditions = async (slug) => {
  const response = await api.get(`/tournaments/${slug}/editions`);
  return response.data;
}

// fetch specific edition
export const getSpecificEdition = async (slug, year, tour) => {
  const response = await api.get(`/tournaments/${slug}/editions/${year}/${tour}`);
  return response.data;
}