import Tournament from '../models/Tournament.js';
import TournamentEdition from '../models/TournamentEdition.js';

class TournamentEditionService {
  static async create({ tournamentSlug, year, tour, startDate, endDate }) {
    const tournament = await Tournament.findOne({ slug: tournamentSlug });

    if (!tournament) {
      throw new Error('Tournament not found');
    }

    if (year < 1900) {
      throw new Error('Invalid tournament year');
    }

    if (new Date(startDate) >= new Date(endDate)) {
      throw new Error('Start date must be before end date');
    }

    const existing = await TournamentEdition.findOne({
      tournament: tournament._id,
      year,
      tour,
    });

    if (existing) {
      throw new Error('Edition already exists for this tournament/year/tour');
    }

    const edition = await TournamentEdition.create({
      tournament: tournament._id,
      year,
      tour,
      startDate,
      endDate,
    });

    return edition;
  }

  static async getByTournamentSlug(slug) {
    const tournament = await Tournament.findOne({ slug });

    if (!tournament) {
      throw new Error('Tournament not found');
    }

    const editions = TournamentEdition.find({ tournament: tournament._id }).sort({
      year: -1,
    });

    return editions;
  }

  static async getSpecificEdition(slug, year, tour) {
    const tournament = await Tournament.findOne({ slug });

    if (!tournament) {
      throw new Error('Tournament not found');
    }

    const edition = await TournamentEdition.findOne({
      tournament: tournament._id,
      year,
      tour,
    });

    if (!edition) {
      throw new Error('Tournament edition not found');
    }

    return edition;
  }
}

export default TournamentEditionService;