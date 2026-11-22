import type { Budget } from '../types';

/** Sample data for the landing page demo. Replace with real content. */
export const budgets: Budget[] = [
  {
    id: 'monthly-home',
    name: 'Monthly Home',
    categories: [
      {
        id: 'groceries',
        name: 'Groceries',
        limit: 12000,
        spent: 8450,
        burstIcons: ['carrot', 'tomato', 'leaf'],
        transactions: [
          { id: 'g1', title: 'Weekly vegetables', date: '18 Nov', amount: 1240 },
          { id: 'g2', title: 'Local market', date: '16 Nov', amount: 680 },
          { id: 'g3', title: 'Supermarket run', date: '12 Nov', amount: 2150 },
        ],
      },
      {
        id: 'rent',
        name: 'Rent',
        limit: 18000,
        spent: 18000,
        burstIcons: ['note', 'coin', 'house'],
        transactions: [{ id: 'r1', title: 'November rent', date: '1 Nov', amount: 18000 }],
      },
      {
        id: 'transport',
        name: 'Transport',
        limit: 4000,
        spent: 2300,
        burstIcons: ['car', 'bus', 'coin'],
        transactions: [
          { id: 't1', title: 'Metro card top-up', date: '17 Nov', amount: 500 },
          { id: 't2', title: 'Cab to airport', date: '15 Nov', amount: 320 },
          { id: 't3', title: 'Fuel', date: '9 Nov', amount: 1480 },
        ],
      },
      {
        id: 'dining',
        name: 'Dining',
        limit: 5000,
        spent: 3900,
        burstIcons: ['fork', 'cup', 'tomato'],
        transactions: [
          { id: 'd1', title: 'Dinner with friends', date: '19 Nov', amount: 1850 },
          { id: 'd2', title: 'Coffee and snacks', date: '14 Nov', amount: 450 },
          { id: 'd3', title: 'Weekend brunch', date: '10 Nov', amount: 1600 },
        ],
      },
    ],
  },
  {
    id: 'goa-trip',
    name: 'Goa Trip',
    categories: [
      {
        id: 'stay',
        name: 'Stay',
        limit: 20000,
        spent: 14000,
        burstIcons: ['house', 'coin', 'star'],
        transactions: [{ id: 's1', title: 'Beach resort, 3 nights', date: '2 Nov', amount: 14000 }],
      },
      {
        id: 'food',
        name: 'Food',
        limit: 9000,
        spent: 4200,
        burstIcons: ['fork', 'cup', 'carrot'],
        transactions: [
          { id: 'f1', title: 'Seafood dinner', date: '3 Nov', amount: 2100 },
          { id: 'f2', title: 'Cafe breakfast', date: '4 Nov', amount: 900 },
          { id: 'f3', title: 'Beach shack lunch', date: '4 Nov', amount: 1200 },
        ],
      },
      {
        id: 'activities',
        name: 'Activities',
        limit: 6000,
        spent: 5600,
        burstIcons: ['star', 'coin', 'bus'],
        transactions: [
          { id: 'a1', title: 'Scooter rental', date: '3 Nov', amount: 1600 },
          { id: 'a2', title: 'Water sports', date: '4 Nov', amount: 4000 },
        ],
      },
    ],
  },
  {
    id: 'side-hustle',
    name: 'Side Hustle',
    categories: [
      {
        id: 'software',
        name: 'Software',
        limit: 3000,
        spent: 1200,
        burstIcons: ['monitor', 'coin', 'star'],
        transactions: [{ id: 'sw1', title: 'Design tool plan', date: '5 Nov', amount: 1200 }],
      },
      {
        id: 'ads',
        name: 'Ads',
        limit: 6000,
        spent: 2400,
        burstIcons: ['horn', 'coin', 'star'],
        transactions: [
          { id: 'ad1', title: 'Social campaign', date: '11 Nov', amount: 1400 },
          { id: 'ad2', title: 'Search ads', date: '7 Nov', amount: 1000 },
        ],
      },
    ],
  },
];
