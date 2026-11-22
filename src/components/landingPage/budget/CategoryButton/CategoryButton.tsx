import type { MouseEvent } from 'react';
import type { BudgetCategory } from '../../../landingPage/types';
import {
  formatCurrency,
  getUsageLabel,
  getUsagePercent,
  getUsageTone,
} from '../../../../utils/budgetMath';
import { classNames } from '../../../../utils/classNames';
import { ProgressBar } from '../../ui/ProgressBar/ProgressBar';
import styles from './CategoryButton.module.css';

interface CategoryButtonProps {
  category: BudgetCategory;
  isSelected: boolean;
  /** Called with the vertical center of this button, relative to its positioned parent. */
  onSelect: (originY: number) => void;
}

export function CategoryButton({ category, isSelected, onSelect }: CategoryButtonProps) {
  const percent = getUsagePercent(category.spent, category.limit);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    onSelect(button.offsetTop + button.offsetHeight / 2);
  };

  return (
    <button
      type="button"
      className={classNames(styles.categoryButton, isSelected && styles.selectedCategory)}
      aria-pressed={isSelected}
      onClick={handleClick}
    >
      <span className={styles.topRow}>
        <span className={styles.categoryName}>{category.name}</span>
        <span className={styles.amounts}>
          {formatCurrency(category.spent)} / {formatCurrency(category.limit)}
        </span>
      </span>
      <ProgressBar
        percent={percent}
        tone={getUsageTone(percent)}
        size="slim"
        label={`${category.name} budget used`}
      />
      <span className={styles.statusText}>
        {getUsageLabel(percent)} ({percent}%)
      </span>
    </button>
  );
}
