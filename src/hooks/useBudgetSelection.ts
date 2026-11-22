import { useState } from 'react';
import type { Budget } from '../components/landingPage/types';

/** Tracks which budget and which category are selected. Picking a budget goes back to its first category. */
export function useBudgetSelection(budgets: Budget[]) {
  const [budgetIndex, setBudgetIndex] = useState(0);
  const [categoryIndex, setCategoryIndex] = useState(0);

  const budget = budgets[budgetIndex];
  const category = budget.categories[categoryIndex];

  const selectBudget = (index: number) => {
    setBudgetIndex(index);
    setCategoryIndex(0);
  };

  return { budget, category, budgetIndex, categoryIndex, selectBudget, selectCategory: setCategoryIndex };
}
