import mongoose, { Schema } from 'mongoose';
import { Match } from '../types/match';

const matchSchema = new Schema<Match>({
    tournament: {
      type: String,
      required: true,
      enum: ['AUSTRALIAN_OPEN', 'FRENCH_OPEN', 'WIMBLEDON', 'US_OPEN'],
    },
    year: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["R128", "R64", "R32", "R16", "QF", "SF", "FINAL"],
    },
    playerA: {
      type: String, 
      required: true,
    },
    playerB: {
      type: String,
      required: true,
    },
    score: {
      type: String,
      required: true,
    },
    winner: {
      type: String,
      required: true,
      enum: ['A', 'B'],
    },
}, { timestamps: true });

const Match = mongoose.model<Match>('Match', matchSchema);