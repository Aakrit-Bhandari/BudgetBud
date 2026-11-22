import type { SummaryHighlight } from '../types';

export const summaryHighlights: SummaryHighlight[] = [
  {
    id: 'day-wise',
    icon: 'bell',
    title: 'Day wise, not week wise',
    description: 'One clear recap for each day, so small leaks show up early.',
  },
  {
    id: 'end-of-day',
    icon: 'clock',
    title: 'Arrives at the end of the day',
    description: 'Spent today, left in your budget, and where most of it went.',
  },
  {
    id: 'active-budget-only',
    icon: 'check',
    title: 'Only with an active budget',
    description: 'No active budget, no message. Your inbox stays quiet.',
  },
];

/** Sample notification shown in the phone-style preview card. */
export const sampleSummary = {
  dateLabel: 'Friday, 20 Nov',
  headline: 'You spent ₹1,240 today',
  rows: [
    { label: 'Left in Monthly Home', value: '₹13,350', isHighlighted: true },
    { label: 'Top category', value: 'Groceries', isHighlighted: false },
    { label: 'Transactions', value: '3', isHighlighted: false },
  ],
  statusMessage: 'You are on track for the month.',
};
