import type { ReactNode, Ref } from 'react';
import { classNames } from '../../../../utils/classNames';
import styles from './PiggyBankFrame.module.css';

interface PiggyBankFrameProps {
  /** Attach to the coin slot so other elements (like MoneyRain) can aim at it. */
  slotRef?: Ref<HTMLDivElement>;
  className?: string;
  /** Rendered inside the round body. */
  children: ReactNode;
}

/** A round piggy bank (ears, legs, tail, snout and a coin slot on top) that holds any content. */
export function PiggyBankFrame({ slotRef, className, children }: PiggyBankFrameProps) {
  return (
    <div className={classNames(styles.pig, className)}>
      <span className={classNames(styles.part, styles.ear, styles.earLeft)} aria-hidden="true" />
      <span className={classNames(styles.part, styles.ear, styles.earRight)} aria-hidden="true" />
      <span className={classNames(styles.part, styles.leg, styles.legLeft)} aria-hidden="true" />
      <span className={classNames(styles.part, styles.leg, styles.legRight)} aria-hidden="true" />
      <svg className={styles.tail} viewBox="0 0 44 52" aria-hidden="true">
        <path d="M40 8C20 2 6 14 14 24c7 9 22 0 14-7-5-4-12 2-6 6" />
      </svg>

      <div className={styles.body}>
        <span className={styles.eye} aria-hidden="true" />
        <div className={styles.content}>{children}</div>
      </div>

      <div className={styles.snout} aria-hidden="true">
        <span className={classNames(styles.nostril, styles.nostrilTop)} />
        <span className={classNames(styles.nostril, styles.nostrilBottom)} />
      </div>
      <div ref={slotRef} className={styles.slot} aria-hidden="true" />
    </div>
  );
}
