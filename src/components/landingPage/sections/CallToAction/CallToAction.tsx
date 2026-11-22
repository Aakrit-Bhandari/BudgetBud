import { Container } from '../../layout/Container/Container';
import { Button } from '../../ui/Button/Button';
import styles from './CallToAction.module.css';

export function CallToAction() {
  return (
    <Container className={styles.wrapper}>
      <section id="get-started" className={styles.banner}>
        <h2 className={styles.title}>Start your first budget today.</h2>
        <p className={styles.description}>
          Be among the first to try BudgetBud and see what comes out of the box next.
        </p>
        <Button href="#top" variant="dark">
          Get early access
        </Button>
      </section>
    </Container>
  );
}
