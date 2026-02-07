import { MatchModel } from "../models/match.model";
import { Match, MatchFilters } from "../types/match";

class MatchService {
  async getAllMatches(filters: MatchFilters = {}): Promise<Match[]> {
    const query: Partial<Match> = {};

    if (filters.year !== undefined) {
      query.year = filters.year;
    }

    if (filters.tournament !== undefined) {
      query.tournament = filters.tournament;
    }

    if (filters.category !== undefined) {
      query.category = filters.category;
    }

    if (filters.round !== undefined) {
      query.round = filters.round;
    }

    const matches = await MatchModel.find(query).sort({
      year: -1,
      tournament: 1,
    });

    return matches;
  }
}

export default new MatchService();