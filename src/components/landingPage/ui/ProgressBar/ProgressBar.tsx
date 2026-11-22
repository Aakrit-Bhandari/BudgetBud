import type { UsageTone } from '../../../../utils/budgetMath';
import { classNames } from '../../../../utils/classNames';
import styles from './ProgressBar.module.css';

interface ProgressBarProps {
  /** 0 to 100. Values above 100 are clamped for display. */
  percent: number;
  tone?: UsageTone;
  size?: 'regular' | 'slim';
  label: string;
}

export function ProgressBar({ percent, tone = 'safe', size = 'regular', label }: ProgressBarProps) {
  const visiblePercent = Math.min(Math.max(percent, 0), 100);

  return (
    <div
      className={classNames(styles.track, size === 'slim' && styles.slim)}
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={visiblePercent}
    >
      <div className={classNames(styles.fill, styles[tone])} style={{ width: `${visiblePercent}%` }} />
    </div>
  );
}
