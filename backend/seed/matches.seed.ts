import 'dotenv/config';
import connectDB from '../config/db.config';
import { MatchModel } from '../models/match.model';

const seedMatches = async () => {
  try {
    await connectDB();

    console.log('Seeding matches...');

    await MatchModel.deleteMany();

    await MatchModel.insertMany([
      {
        tournament: 'WIMBLEDON',
        year: 2023,
        category: 'MENS_SINGLES',
        round: 'FINAL',
        playerA: 'Novak Djokovic',
        playerB: 'Carlos Alcaraz',
        score: '1-6 7-6 6-1 3-6 6-4',
        winner: 'B',
      },
      {
        tournament: 'FRENCH_OPEN',
        year: 2022,
        category: 'MENS_SINGLES',
        round: 'FINAL',
        playerA: 'Rafael Nadal',
        playerB: 'Casper Ruud',
        score: '6-3 6-3 6-0',
        winner: 'A',
      },
      {
        tournament: 'US_OPEN',
        year: 2021,
        category: 'WOMENS_SINGLES',
        round: 'FINAL',
        playerA: 'Emma Raducanu',
        playerB: 'Leylah Fernandez',
        score: '6-4 6-3',
        winner: 'A',
      }
    ]);

    console.log('Matches seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error(`Seeding failed: ${err}`);
    process.exit(1);
  }
}

seedMatches();