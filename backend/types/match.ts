export type GrandSlam = 
  | 'AUSTRALIAN_OPEN'
  | 'FRENCH_OPEN'
  | 'WIMBLEDON'
  | 'US_OPEN';

export type Category = 'MENS_SINGLES' | 'WOMENS_SINGLES';

export type Round = 
  | 'R128'
  | 'R64'
  | 'R32'
  | 'R16'
  | 'QF'
  | 'SF'
  | 'FINAL';

export interface Match {
  tournament: GrandSlam;
  year: number;
  category: Category;
  round: Round;
  playerA: string;
  playerB: string;
  score: string;
  winner: 'A' | 'B';
}

export interface MatchFilters {
  year?: number;
  tournament?: GrandSlam;
  category?: Category;
  round?: Round;
}

export interface CreateMatchInput {
  tournament: GrandSlam;
  year: number;
  category: Category;
  round: Round;
  playerA: string;
  playerB: string;
  score: string;
  winner: 'A' | 'B';
}