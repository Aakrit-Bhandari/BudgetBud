import { classNames } from '../../../../utils/classNames';
import styles from './BudgetTabs.module.css';

interface BudgetTabsProps {
  budgetNames: string[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}

export function BudgetTabs({ budgetNames, selectedIndex, onSelect }: BudgetTabsProps) {
  return (
    <div className={styles.tabList} role="group" aria-label="Choose a budget">
      {budgetNames.map((name, index) => (
        <button
          key={name}
          type="button"
          className={classNames(styles.tab, index === selectedIndex && styles.selectedTab)}
          aria-pressed={index === selectedIndex}
          onClick={() => onSelect(index)}
        >
          {name}
        </button>
      ))}
    </div>
  );
}
