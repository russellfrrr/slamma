import mongoose from 'mongoose';

const tournamentEditionSchema = new mongoose.Schema({
  tournament: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tournament',
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  tour: {
    type: String,
    enum: ['ATP', 'WTA'],
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
}, { timestamps: true });

tournamentEditionSchema.index({ tournament: 1, year: 1, tour: 1 }, { unique: true });

const TournamentEdition = mongoose.model('TournamentEdition', tournamentEditionSchema);

export default TournamentEdition;