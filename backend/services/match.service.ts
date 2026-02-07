import { MatchModel } from "../models/match.model";
import { Match } from "../types/match";

class MatchService {
  async getAllMatches(): Promise<Match[]> {
    const matches = await MatchModel.find().sort({
      year: -1,
      tournament: 1,
    });

    return matches;
  }
}

export default new MatchService();