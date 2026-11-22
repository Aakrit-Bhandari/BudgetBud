import type { Budget, FlyingIconKind } from '../../types';
import { formatCurrency, getBudgetTotals, getUsageTone } from '../../../../utils/budgetMath';
import { Card } from '../../ui/Card/Card';
import { ProgressBar } from '../../ui/ProgressBar/ProgressBar';
import { CategoryButton } from '../CategoryButton/CategoryButton';
import { FlyingIcons } from '../FlyingIcons/FlyingIcons';
import styles from './BudgetSummaryCard.module.css';

interface BudgetSummaryCardProps {
  budget: Budget;
  selectedCategoryIndex: number;
  onSelectCategory: (categoryIndex: number, originY: number) => void;
  /** Optional tap-to-burst animation. Leave all three out for a calm card. */
  burstIcons?: FlyingIconKind[];
  burstId?: number;
  burstOriginY?: number;
}

/** Shows a budget's total progress and lets the visitor tap each category. */
export function BudgetSummaryCard({
  budget,
  selectedCategoryIndex,
  onSelectCategory,
  burstIcons,
  burstId,
  burstOriginY,
}: BudgetSummaryCardProps) {
  const totals = getBudgetTotals(budget);

  return (
    <Card className={styles.summaryCard}>
      {burstIcons && burstId !== undefined && burstOriginY !== undefined && (
        <FlyingIcons iconKinds={burstIcons} burstId={burstId} originY={burstOriginY} />
      )}

      <div className={styles.header}>
        <h3 className={styles.budgetName}>{budget.name}</h3>
        <span className={styles.totals}>
          {formatCurrency(totals.spent)} of {formatCurrency(totals.limit)}
        </span>
      </div>

      <div className={styles.progressWrapper}>
        <ProgressBar percent={totals.percent} tone={getUsageTone(totals.percent)} label={`${budget.name} budget used`} />
      </div>

      <p className={styles.tapHint}>Tap a category to see what is inside</p>

      <div className={styles.categoryList}>
        {budget.categories.map((category, index) => (
          <CategoryButton
            key={category.id}
            category={category}
            isSelected={index === selectedCategoryIndex}
            onSelect={(originY) => onSelectCategory(index, originY)}
          />
        ))}
      </div>
    </Card>
  );
}
