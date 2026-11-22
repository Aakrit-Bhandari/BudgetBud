import styles from './ShareRing.module.css';

const RADIUS = 22;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

interface ShareRingProps {
  /** 0 to 100. */
  percent: number;
  /** Spoken description, since the ring itself is a picture. */
  label: string;
}

/** Small progress ring with the percentage in the middle. */
export function ShareRing({ percent, label }: ShareRingProps) {
  const visiblePercent = Math.min(Math.max(percent, 0), 100);
  const filled = (visiblePercent / 100) * CIRCUMFERENCE;

  return (
    <div className={styles.ring} role="img" aria-label={label}>
      <svg className={styles.svg} width="62" height="62" viewBox="0 0 54 54" aria-hidden="true">
        <circle className={styles.track} cx="27" cy="27" r={RADIUS} />
        <circle
          className={styles.value}
          cx="27"
          cy="27"
          r={RADIUS}
          strokeDasharray={`${filled.toFixed(1)} ${CIRCUMFERENCE.toFixed(1)}`}
        />
      </svg>
      <span className={styles.label} aria-hidden="true">
        {visiblePercent}%
      </span>
    </div>
  );
}
