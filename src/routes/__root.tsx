import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { Home, Info } from 'lucide-react';
import { lazy } from 'react';
import styles from './Root.module.scss';

const TanStackRouterDevtools = import.meta.env.DEV
  ? lazy(() =>
      import('@tanstack/react-router-devtools').then((res) => ({ default: res.TanStackRouterDevtools }))
    )
  : () => null;

export const Route = createRootRoute({
  component: () => (
    <div className={styles.root}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className="container">
            <div className={styles.navContent}>
              <Link to="/" className={styles.logo}>
                <Home size={24} />
                <span>CompuWiser</span>
              </Link>

              <div className={styles.navLinks}>
                <Link to="/" className={styles.navLink} activeProps={{ className: styles.active }}>
                  <Home size={18} />
                  Home
                </Link>
                <Link to="/about" className={styles.navLink} activeProps={{ className: styles.active }}>
                  <Info size={18} />
                  About
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <div className="container">
          <p>&copy; 2025 CompuWiser. All rights reserved.</p>
        </div>
      </footer>

      <TanStackRouterDevtools />
    </div>
  ),
});
