import { createFileRoute } from '@tanstack/react-router';
import { Code, Zap, Shield, Globe } from 'lucide-react';
import styles from './Index.module.scss';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  const features = [
    {
      icon: <Code size={32} />,
      title: 'Modern Development',
      description:
        'Built with the latest technologies including React 19, TypeScript, and modern tooling for optimal performance.',
    },
    {
      icon: <Zap size={32} />,
      title: 'Lightning Fast',
      description:
        'Optimized build process with Vite and intelligent code splitting for blazing fast load times.',
    },
    {
      icon: <Shield size={32} />,
      title: 'Type Safe',
      description:
        'Fully typed with TypeScript and TanStack Router for maximum developer experience and reliability.',
    },
    {
      icon: <Globe size={32} />,
      title: 'Production Ready',
      description:
        'Deployed on GitHub Pages with custom domain, CI/CD pipeline, and modern development practices.',
    },
  ];

  return (
    <div className={styles.homePage}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Welcome to <span className={styles.highlight}>CompuWiser</span>
            </h1>
            <p className={styles.heroDescription}>
              A modern, production-ready React application built with the latest technologies and development
              practices.
            </p>
            <div className={styles.heroActions}>
              <button className={styles.primaryButton}>
                Get Started
                <Zap size={18} />
              </button>
              <button className={styles.secondaryButton}>Learn More</button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Features & Technologies</h2>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.techStack}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Technology Stack</h2>
          <div className={styles.techGrid}>
            <div className={styles.techItem}>React 19</div>
            <div className={styles.techItem}>TypeScript</div>
            <div className={styles.techItem}>Vite</div>
            <div className={styles.techItem}>TanStack Router</div>
            <div className={styles.techItem}>Sass Modules</div>
            <div className={styles.techItem}>pnpm</div>
            <div className={styles.techItem}>GitHub Pages</div>
            <div className={styles.techItem}>GitHub Actions</div>
          </div>
        </div>
      </section>
    </div>
  );
}
