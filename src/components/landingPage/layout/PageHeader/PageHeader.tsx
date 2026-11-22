import type { ReactNode } from 'react';
import styles from './PageHeader.module.css';

interface PageHeaderProps {
  icon: ReactNode;
  eyebrow: string;
  title: string;
  description: string;
  /** Short facts or tips shown as pills under the description. */
  chips?: string[];
}

/** Title block for a signed-in page: icon badge, eyebrow, title, description and optional pills. */
export function PageHeader({ icon, eyebrow, title, description, chips = [] }: PageHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.badge} aria-hidden="true">
        {icon}
      </div>
      <div>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        {chips.length > 0 && (
          <ul className={styles.chips}>
            {chips.map((chip) => (
              <li key={chip} className={styles.chip}>
                {chip}
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}
