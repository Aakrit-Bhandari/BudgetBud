import type { ReactNode } from 'react';
import { classNames } from '../../../../utils/classNames';
import styles from './Card.module.css';

interface CardProps {
  children: ReactNode;
  className?: string;
}

/** Rounded surface used for every panel on the page. */
export function Card({ children, className }: CardProps) {
  return <div className={classNames(styles.card, className)}>{children}</div>;
}
