import type { ReactNode } from 'react';
import { classNames } from '../../../../utils/classNames';
import { Container } from '../Container/Container';
import styles from './Section.module.css';

type SectionTone = 'default' | 'raised';

interface SectionProps {
  id?: string;
  tone?: SectionTone;
  /** Decorative layer rendered behind the content, such as an illustration. */
  backdrop?: ReactNode;
  children: ReactNode;
}

export function Section({ id, tone = 'default', backdrop, children }: SectionProps) {
  return (
    <section id={id} className={classNames(styles.section, tone === 'raised' && styles.raised)}>
      {backdrop}
      <Container className={styles.content}>{children}</Container>
    </section>
  );
}
