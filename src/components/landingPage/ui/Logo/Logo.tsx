import styles from './Logo.module.css';

interface LogoMarkProps {
  size?: number;
}

/** The app's square mark, reusable on its own (for example in a notification). */
export function LogoMark({ size = 34 }: LogoMarkProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 34 34" aria-hidden="true">
      <rect width="34" height="34" rx="10" fill="#C8F25A" />
      <path d="M9 12h16M9 17h16M9 22h9" stroke="#0F0E24" strokeWidth="2.6" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function Logo() {
  return (
    <a href="#top" className={styles.logo} aria-label="BudgetBud home">
      <LogoMark />
      <span className={styles.wordmark}>BudgetBud</span>
    </a>
  );
}
