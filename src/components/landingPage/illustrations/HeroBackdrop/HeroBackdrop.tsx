import { classNames } from '../../../../utils/classNames';
import styles from './HeroBackdrop.module.css';

/** Faint savings-themed line art behind the hero: piggy bank, coin stack and a growth line. */
export function HeroBackdrop() {
  return (
    <div className={styles.backdrop} aria-hidden="true">
      <svg
        className={classNames(styles.piggyOutline, styles.floating)}
        width="460"
        height="368"
        viewBox="0 0 200 160"
        fill="none"
        stroke="#2F2C5E"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="100" cy="88" rx="70" ry="50" fill="#16143A" />
        <path d="M138 50l14-20 6 28z" fill="#16143A" />
        <rect x="160" y="80" width="30" height="24" rx="10" fill="#16143A" />
        <circle cx="170" cy="92" r="2" fill="#2F2C5E" />
        <circle cx="180" cy="92" r="2" fill="#2F2C5E" />
        <rect x="58" y="128" width="16" height="22" rx="6" fill="#16143A" />
        <rect x="118" y="128" width="16" height="22" rx="6" fill="#16143A" />
        <circle cx="140" cy="74" r="3.5" fill="#2F2C5E" />
        <path d="M82 42q18-7 36 0" />
        <path d="M32 80c-16-3-18-20-4-20" />
        <circle cx="100" cy="14" r="12" fill="#3A3410" stroke="#5A4E12" />
        <path d="M96 10h8M96 15h8M97 10c5 0 5 5 0 5l6 6" stroke="#5A4E12" />
      </svg>

      <svg
        className={classNames(styles.coinStack, styles.floating)}
        width="190"
        height="190"
        viewBox="0 0 100 100"
        fill="none"
        stroke="#5A4E12"
        strokeWidth="2.5"
        strokeLinecap="round"
      >
        <ellipse cx="38" cy="72" rx="26" ry="9" fill="#2A2610" />
        <ellipse cx="38" cy="62" rx="26" ry="9" fill="#2A2610" />
        <ellipse cx="38" cy="52" rx="26" ry="9" fill="#2A2610" />
        <ellipse cx="68" cy="34" rx="20" ry="7" fill="#2A2610" />
        <ellipse cx="68" cy="26" rx="20" ry="7" fill="#2A2610" />
      </svg>

      <svg
        className={styles.growthLine}
        width="300"
        height="120"
        viewBox="0 0 300 120"
        fill="none"
        stroke="#2F2C5E"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 104 60 78 100 90 160 44 210 56 292 10" />
        <path d="M270 10h22v22" />
      </svg>
    </div>
  );
}
