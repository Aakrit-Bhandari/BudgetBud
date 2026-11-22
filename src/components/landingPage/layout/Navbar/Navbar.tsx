import { LOGIN_HASH } from '../../../../hooks/useHashRoute';
import { Button } from '../../ui/Button/Button';
import { Logo } from '../../ui/Logo/Logo';
import { Container } from '../Container/Container';
import styles from './Navbar.module.css';

const navigationLinks = [
  { label: 'Budgets', href: '#budgets' },
  { label: 'Daily summary', href: '#daily-summary' },
  { label: 'Mystery box', href: '#mystery-box' },
];

export function Navbar() {
  return (
    <Container className={styles.navbarContainer}>
      <nav className={styles.navbar} aria-label="Main">
        <Logo />
        <ul className={styles.linkList}>
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <a className={styles.link} href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.actions}>
          <Button href={LOGIN_HASH} variant="outline" size="compact">
            Log in
          </Button>
          <Button href="#get-started" size="compact">
            Get early access
          </Button>
        </div>
      </nav>
    </Container>
  );
}
