import type { ReactNode } from 'react';
import { classNames } from '../../../../utils/classNames';
import styles from './Container.module.css';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/** Centers content and keeps it to the page's maximum readable width. */
export function Container({ children, className }: ContainerProps) {
  return <div className={classNames(styles.container, className)}>{children}</div>;
}
