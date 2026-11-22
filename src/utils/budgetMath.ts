import type { Budget, BudgetCategory } from '../components/landingPage/types';

export type UsageTone = 'safe' | 'warning' | 'limit';

export function formatCurrency(amount: number): string {
  return `₹${amount.toLocaleString('en-IN')}`;
}

export function getUsagePercent(spent: number, limit: number): number {
  if (limit <= 0) return 0;
  return Math.round((spent / limit) * 100);
}

export function getUsageTone(percent: number): UsageTone {
  if (percent >= 100) return 'limit';
  if (percent >= 80) return 'warning';
  return 'safe';
}

export function getUsageLabel(percent: number): string {
  const tone = getUsageTone(percent);
  if (tone === 'limit') return 'Limit reached';
  if (tone === 'warning') return 'Close to the limit';
  return 'On track';
}

export function getBudgetTotals(budget: Budget) {
  const limit = budget.categories.reduce(
    (sum, category) => sum + category.limit,
    0,
  );
  const spent = budget.categories.reduce(
    (sum, category) => sum + category.spent,
    0,
  );
  return { limit, spent, percent: getUsagePercent(spent, limit) };
}

/** A category's share of everything spent in its budget, as a whole percent. */
export function getCategoryShare(
  category: BudgetCategory,
  budget: Budget,
): number {
  const { spent } = getBudgetTotals(budget);
  return spent > 0 ? Math.round((category.spent / spent) * 100) : 0;
}
