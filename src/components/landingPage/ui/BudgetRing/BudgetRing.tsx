import styles from './BudgetRing.module.css';
import type { StyleWithCssVars } from '../../../utils/cssVars';

interface BudgetRingProps {
  percent: number;
  caption?: string;
}

/** Circular gauge showing how much of a budget has been used. */
export function BudgetRing({ percent, caption = 'spent' }: BudgetRingProps) {
  const ringStyle: StyleWithCssVars = { '--ring-percent': `${percent}%` };

  return (
    <div className={styles.ring} style={ringStyle} role="img" aria-label={`${percent}% ${caption}`}>
      <div className={styles.ringCenter}>
        <span className={styles.percentValue}>{percent}%</span>
        <span className={styles.caption}>{caption}</span>
      </div>
    </div>
  );
}
