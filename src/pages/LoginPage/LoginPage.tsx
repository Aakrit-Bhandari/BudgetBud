import { RefObject, useRef } from 'react';
import { LoginForm } from '../../components/auth/LoginForm/LoginForm';
import { MoneyRain } from '../../components/landingPage/illustrations/MoneyRain/MoneyRain';
import { PiggyBankFrame } from '../../components/landingPage/illustrations/PiggyBankFrame/PiggyBankFrame';
import { Container } from '../../components/landingPage/layout/Container/Container';
import { Logo } from '../../components/landingPage/ui/Logo/Logo';
import styles from './LoginPage.module.css';

/** Login inside a round piggy bank, with coins and notes falling into its slot. */
export function LoginPage() {
  const slotRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.page}>
      <MoneyRain targetRef={slotRef as RefObject<HTMLElement>} />
      <Container className={styles.header}>
        <Logo />
      </Container>
      <main className={styles.main}>
        <PiggyBankFrame slotRef={slotRef}>
          <LoginForm />
        </PiggyBankFrame>
      </main>
    </div>
  );
}
