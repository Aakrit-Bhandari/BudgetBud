import { heroPreview } from '../../../landingPage/data/heroPreview';
import { BudgetRing } from '../../ui/BudgetRing/BudgetRing';
import { Card } from '../../ui/Card/Card';
import styles from './HeroBudgetPreview.module.css';

/** Floating sample budget card shown beside the hero copy. */
export function HeroBudgetPreview() {
  return (
    <Card className={styles.previewCard}>
      <div className={styles.topRow}>
        <span className={styles.label}>Active budget</span>
        <span className={styles.statusBadge}>{heroPreview.statusLabel}</span>
      </div>
      <h3 className={styles.budgetName}>{heroPreview.budgetName}</h3>

      <div className={styles.gaugeRow}>
        <BudgetRing percent={heroPreview.percentSpent} />
        <dl className={styles.figures}>
          <div>
            <dt className={styles.figureLabel}>Spent</dt>
            <dd className={styles.figureValue}>{heroPreview.spentLabel}</dd>
          </div>
          <div>
            <dt className={styles.figureLabel}>Left</dt>
            <dd className={styles.remainingValue}>{heroPreview.remainingLabel}</dd>
          </div>
        </dl>
      </div>

      <ul className={styles.categoryList}>
        {heroPreview.topCategories.map((category) => (
          <li key={category.name} className={styles.categoryRow}>
            <span>{category.name}</span>
            <span className={styles.categoryAmount}>{category.amountLabel}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
