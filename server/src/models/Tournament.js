import mongoose from 'mongoose';

const tournamentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  surface: {
    type: String,
    enum: ['hard', 'clay', 'grass'],
    required: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  logoUrl: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true });

const Tournament = mongoose.model('Tournament', tournamentSchema);

export default Tournament;