import { classNames } from '../../../../utils/classNames';
import styles from './SectionHeading.module.css';

type EyebrowAccent = 'lime' | 'coral' | 'violet';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  accent?: EyebrowAccent;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  accent = 'lime',
  className,
}: SectionHeadingProps) {
  return (
    <header className={classNames(styles.heading, className)}>
      <p className={classNames(styles.eyebrow, styles[accent])}>{eyebrow}</p>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </header>
  );
}
