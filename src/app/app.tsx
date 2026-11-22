import { useHashRoute, type AppRoute } from '../hooks/useHashRoute';
import { BudgetsPage } from '../pages/BudgetsPage/BudgetsPage';
import { LandingPage } from '../pages/LandingPage/LandingPage';
import { LoginPage } from '../pages/LoginPage/LoginPage';

const pages: Record<AppRoute, () => React.ReactNode> = {
  home: LandingPage,
  login: LoginPage,
  budgets: BudgetsPage,
};

export function App() {
  const route = useHashRoute();
  const Page = pages[route];
  return <Page />;
}
