import Tournament from '../models/Tournament.js';

class TournamentService {
  static async create(data) {
    const existing = await Tournament.findOne({ slug: data.slug });
    if (existing) {
      throw new Error('Tournament with this slug already exists');
    }

    const tournament = Tournament.create(data);
    return tournament;
  }

  static async getAll() {
    const tournament = Tournament.find().sort({ createdAt: -1 });

    return tournament;
  }

  static async getBySlug(slug) {
    const tournament = await Tournament.findOne({ slug });
    if (!tournament) {
      throw new Error('Tournament not found');
    }

    return tournament;
  }
}

export default TournamentService;