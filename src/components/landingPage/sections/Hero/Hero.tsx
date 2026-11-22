import { Button } from '../../ui/Button/Button';
import { Container } from '../../layout/Container/Container';
import { HeroBackdrop } from '../../illustrations/HeroBackdrop/HeroBackdrop';
import { HeroBudgetPreview } from './HeroBudgetPreview';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <HeroBackdrop />

      <Container className={styles.content}>
        <div className={styles.copy}>
          <p className={styles.announcement}>
            <span className={styles.announcementDot} />
            New features dropping all the time
          </p>

          <h1 className={styles.headline}>
            Budgets that
            <br />
            keep you <span className={styles.headlineAccent}>in the know.</span>
          </h1>

          <p className={styles.subheadline}>
            Create budgets, split them into categories, see every transaction behind them, and get a short summary
            at the end of each day. Simple on the surface, with a few surprises inside.
          </p>

          <div className={styles.actions}>
            <Button href="#get-started">Get early access</Button>
            <Button href="#budgets" variant="outline">
              See how it works
            </Button>
          </div>
        </div>

        <div className={styles.preview}>
          <HeroBudgetPreview />
        </div>
      </Container>
    </section>
  );
}
