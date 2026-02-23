import TournamentService from '../services/tournament.service.js';

export const createTournament = async (req, res) => {
  try {
    const payload = req.body;
    const tournament = await TournamentService.create(payload);

    const responseObj = {
      success: true,
      data: tournament,
    };

    res.status(201).json(responseObj);
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
}

export const getAllTournaments = async (req, res) => {
  try {
    const tournaments = await TournamentService.getAll();
    const responseObj = {
      success: true,
      data: tournaments,
    };

    res.status(200).json(responseObj);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}

export const getTournamentsBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const tournament = await TournamentService.getBySlug(slug);

    const responseObj = {
      success: true,
      data: tournament,
    };

    res.status(200).json(responseObj);
  } catch (err) {
    res.status(404).json({
      success: false,
      message: err.message,
    });
  }
}