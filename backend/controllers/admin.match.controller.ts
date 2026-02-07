import { Request, Response } from 'express';
import matchService from '../services/match.service';
import { CreateMatchInput } from '../types/match';

export const createMatch = async (req: Request, res: Response) => {
  try {
    const input: CreateMatchInput = req.body;

    const match = await matchService.createMatch(input);
    const responseObj = {
      success: true,
      message: 'Match created successfully',
      data: match
    };

    res.status(201).json(responseObj);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to create match',
    });
  }
}