import { sampleSummary } from '../../../landingPage/data/dailySummary';
import { classNames } from '../../../../utils/classNames';
import { Icon } from '../../icons/Icon';
import { Card } from '../../ui/Card/Card';
import { LogoMark } from '../../ui/Logo/Logo';
import styles from './SummaryNotification.module.css';

/** Mock of the end-of-day message a user receives. */
export function SummaryNotification() {
  return (
    <Card className={styles.notification}>
      <div className={styles.sender}>
        <LogoMark size={36} />
        <div className={styles.senderText}>
          <span className={styles.senderName}>BudgetBud</span>
          <span className={styles.senderSubtitle}>Daily summary</span>
        </div>
        <span className={styles.timeOfDay}>Evening</span>
      </div>

      <div className={styles.message}>
        <p className={styles.dateLabel}>{sampleSummary.dateLabel}</p>
        <h3 className={styles.headline}>{sampleSummary.headline}</h3>
        <dl className={styles.rows}>
          {sampleSummary.rows.map((row) => (
            <div key={row.label} className={styles.row}>
              <dt className={styles.rowLabel}>{row.label}</dt>
              <dd className={classNames(styles.rowValue, row.isHighlighted && styles.highlightedValue)}>
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <p className={styles.status}>
        <Icon name="check" size={18} color="var(--color-lime)" />
        {sampleSummary.statusMessage}
      </p>
      <p className={styles.footnote}>Sample message for illustration</p>
    </Card>
  );
}
