import mongoose from 'mongoose';

const setSchema = new mongoose.Schema({
  p1: {
    type: Number,
    required: true,
  },
  p2: {
    type: Number,
    required: true,
  },
}, { _id: false });

const playerStatsSchema = new mongoose.Schema({
  aces: {
    type: Number,
    default: 0,
  },
  doubleFaults: {
    type: Number,
    default: 0,
  },
  firstServePct: {
    type: Number,
    default: 0,
  },
  winners: {
    type: Number,
    default: 0,
  },
  unforcedErrors: {
    type: Number,
    default: 0,
  },
}, { _id: false });

const statsSchema = new mongoose.Schema({
  player1: {
    type: playerStatsSchema,
    default: () => ({}),
  },
  player2: {
    type: playerStatsSchema,
    default: () => ({}),
  }
}, { _id: false });

const matchSchema = new mongoose.Schema({
  tournamentEdition: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TournamentEdition',
    required: true,
    index: true,
  },
  round: {
    type: String,
    enum: ['R128', 'R64', 'R32', 'R16', 'QF', 'SF', 'F'],
    required: true,
  },
  matchNumber: {
    type: Number,
    required: true,
    min: 1,
  },
  player1: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
    required: true,
  },
  player2: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
    required: true,
  },
  sets: {
    type: [setSchema],
    default: [],
  },
  status: {
    type: String,
    enum: ['scheduled', 'live', 'finished'],
    default: 'scheduled',
    index: true,
  },
  startTime: {
    type: Date, 
    required: true,
  },
  winner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
    default: null,
  },
  nextMatch: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Match',
    default: null,
  },
  stats: {
    type: statsSchema,
    default: () => ({}),
  },
}, { timestamps: true });

matchSchema.index({ tournamentEdition: 1, round: 1, matchNumber: 1 }, { unique: true });

matchSchema.pre('save', function (next) {
  if (this.status === 'finished' && !this.winner) {
    return next(new Error(`Winner must be defined when match status is "finished".`));
  }

  if (this.status !== 'finished' && this.winner) {
    this.winner = null;
  }

  next();
})

const Match = mongoose.model('Match', matchSchema);

export default Match;