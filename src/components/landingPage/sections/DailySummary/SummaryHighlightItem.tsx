import type { SummaryHighlight } from '../../../types';
import { Icon } from '../../icons/Icon';
import styles from './SummaryHighlightItem.module.css';

interface SummaryHighlightItemProps {
  highlight: SummaryHighlight;
}

export function SummaryHighlightItem({ highlight }: SummaryHighlightItemProps) {
  return (
    <li className={styles.item}>
      <span className={styles.iconBadge}>
        <Icon name={highlight.icon} />
      </span>
      <div>
        <h3 className={styles.title}>{highlight.title}</h3>
        <p className={styles.description}>{highlight.description}</p>
      </div>
    </li>
  );
}
