import type { Transaction } from '../../types';
import { formatCurrency } from '../../../../utils/budgetMath';
import { Card } from '../../ui/Card/Card';
import { ShareRing } from '../../ui/ShareRing/ShareRing';
import styles from './TransactionList.module.css';

interface TransactionListProps {
  categoryName: string;
  transactions: Transaction[];
  sharePercent?: number;
}

export function TransactionList({ categoryName, transactions, sharePercent }: TransactionListProps) {
  return (
    <Card className={styles.transactionCard}>
      <div className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Transactions in</p>
          <h3 className={styles.categoryName}>{categoryName}</h3>
        </div>
        {sharePercent !== undefined && (
          <ShareRing percent={sharePercent} label={`${categoryName} is ${sharePercent}% of this budget's spending`} />
        )}
      </div>

      <ul className={styles.list}>
        {transactions.map((transaction) => (
          <li key={transaction.id} className={styles.row}>
            <div className={styles.details}>
              <span className={styles.title}>{transaction.title}</span>
              <span className={styles.date}>{transaction.date}</span>
            </div>
            <span className={styles.amount}>-{formatCurrency(transaction.amount)}</span>
          </li>
        ))}
      </ul>

      <p className={styles.footnote}>Latest transactions shown. Sample data for illustration.</p>
    </Card>
  );
}
