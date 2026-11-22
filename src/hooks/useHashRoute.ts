import { useEffect, useState } from 'react';

export type AppRoute = 'home' | 'login' | 'budgets';

/** Link targets. Any other hash (#top, #budgets, ...) shows the landing page. */
export const LOGIN_HASH = '#/login';
export const BUDGETS_HASH = '#/budgets';

function readRoute(): AppRoute {
  switch (window.location.hash) {
    case LOGIN_HASH:
      return 'login';
    case BUDGETS_HASH:
      return 'budgets';
    default:
      return 'home';
  }
}

export function useHashRoute(): AppRoute {
  const [route, setRoute] = useState<AppRoute>(readRoute);

  useEffect(() => {
    const handleHashChange = () => setRoute(readRoute());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const target = document.getElementById(window.location.hash.slice(1));
    if (route === 'home' && target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [route]);

  return route;
}
