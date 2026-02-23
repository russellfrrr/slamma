import TournamentEditionService from '../services/tournamentEdition.service.js';

export const createEdition = async (req, res) => {
  try {
    const { slug } = req.params;

    const edition = await TournamentEditionService.create({
      tournamentSlug: slug,
      ...req.body,
    });

    const responseObj = {
      success: true,
      data: edition,
    };

    res.status(201).json(responseObj);
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
}

export const getEditions = async (req, res) => {
  try {
    const { slug } = req.params;
    const editions = await TournamentEditionService.getByTournamentSlug(slug);

    const responseObj = {
      success: true,
      data: editions,
    };

    res.status(200).json(responseObj);
  } catch (err) {
    res.status(404).json({
      success: false,
      message: err.message,
    });
  }
}

export const getSpecificEdition = async (req, res) => {
  try {
    const { slug, year, tour } = req.params;
    const edition = await TournamentEditionService.getSpecificEdition(slug, Number(year), tour);

    const responseObj = {
      success: true,
      data: edition,
    };

    res.status(200).json(responseObj);
  } catch (err) {
    res.status(404).json({
      success: false,
      message: err.message,
    });
  }
}