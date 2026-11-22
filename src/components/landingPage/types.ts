export type FlyingIconKind =
  | 'carrot'
  | 'tomato'
  | 'leaf'
  | 'note'
  | 'coin'
  | 'house'
  | 'car'
  | 'bus'
  | 'fork'
  | 'cup'
  | 'star'
  | 'monitor'
  | 'horn';

export interface Transaction {
  id: string;
  title: string;
  date: string;
  amount: number;
}

export interface BudgetCategory {
  id: string;
  name: string;
  limit: number;
  spent: number;
  transactions: Transaction[];
  /** Icons that fly out when the category is tapped. */
  burstIcons: FlyingIconKind[];
}

export interface Budget {
  id: string;
  name: string;
  categories: BudgetCategory[];
}

export interface UpcomingFeature {
  id: string;
  name: string;
  description: string;
  hint: string;
}

export type SummaryHighlightIcon = 'bell' | 'clock' | 'check';

export interface SummaryHighlight {
  id: string;
  icon: SummaryHighlightIcon;
  title: string;
  description: string;
}
