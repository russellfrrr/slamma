import { Request, Response } from 'express';
import matchService from '../services/match.service';
import { MatchFilters } from '../types/match';

export const getMatches = async (req: Request, res: Response) => {
  try {
    const filters: MatchFilters = {
      year: req.query.year ? Number(req.query.year) : undefined,
      tournament: req.query.tournament as MatchFilters['tournament'],
      category: req.query.category as MatchFilters['category'],
      round: req.query.round as MatchFilters['round'],
    };

    const matches = await matchService.getAllMatches(filters);
    const responseObj = {
      success: true,
      message: 'Fetched matches successfully!',
      data: matches,
    };

    res.status(200).json(responseObj);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch matches',
    })
  }
}