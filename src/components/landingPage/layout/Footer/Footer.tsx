import { Container } from '../Container/Container';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <Container>
      <footer className={styles.footer}>
        <span className={styles.brandName}>BudgetBud</span>
        <span>Budgets, categories, daily summaries and more on the way.</span>
      </footer>
    </Container>
  );
}
