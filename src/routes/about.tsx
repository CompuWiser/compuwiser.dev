import { createFileRoute } from '@tanstack/react-router';
import { Github, ExternalLink, Calendar, User } from 'lucide-react';
import styles from './About.module.scss';

export const Route = createFileRoute('/about')({
  component: AboutPage,
});

function AboutPage() {
  const projectDetails = [
    {
      label: 'Created',
      value: 'January 2025',
      icon: <Calendar size={18} />
    },
    {
      label: 'Author',
      value: 'CompuWiser Team',
      icon: <User size={18} />
    },
    {
      label: 'Repository',
      value: 'View on GitHub',
      icon: <Github size={18} />,
      link: 'https://github.com'
    },
    {
      label: 'Live Site',
      value: 'compuwiser.dev',
      icon: <ExternalLink size={18} />,
      link: 'https://compuwiser.dev'
    }
  ];

  const technologies = [
    {
      name: 'React 19',
      description: 'Latest version of React with improved performance and new features',
      category: 'Frontend Framework'
    },
    {
      name: 'TypeScript',
      description: 'Static type checking for enhanced developer experience',
      category: 'Language'
    },
    {
      name: 'Vite',
      description: 'Fast build tool with hot module replacement',
      category: 'Build Tool'
    },
    {
      name: 'TanStack Router',
      description: 'Type-safe router with excellent developer experience',
      category: 'Routing'
    },
    {
      name: 'Sass Modules',
      description: 'Scoped CSS with powerful preprocessing capabilities',
      category: 'Styling'
    },
    {
      name: 'pnpm',
      description: 'Fast, disk space efficient package manager',
      category: 'Package Manager'
    }
  ];

  return (
    <div className={styles.aboutPage}>
      <div className="container">
        <section className={styles.intro}>
          <h1 className={styles.title}>About CompuWiser</h1>
          <p className={styles.description}>
            CompuWiser is a modern web application showcasing the latest in React development practices. 
            Built with React 19, TypeScript, and a carefully curated set of modern tools, this project 
            demonstrates production-ready patterns and best practices for scalable web applications.
          </p>
        </section>

        <section className={styles.details}>
          <h2 className={styles.sectionTitle}>Project Details</h2>
          <div className={styles.detailsGrid}>
            {projectDetails.map((detail, index) => (
              <div key={index} className={styles.detailCard}>
                <div className={styles.detailHeader}>
                  {detail.icon}
                  <span className={styles.detailLabel}>{detail.label}</span>
                </div>
                {detail.link ? (
                  <a href={detail.link} className={styles.detailLink} target="_blank" rel="noopener noreferrer">
                    {detail.value}
                  </a>
                ) : (
                  <span className={styles.detailValue}>{detail.value}</span>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className={styles.technologies}>
          <h2 className={styles.sectionTitle}>Technologies Used</h2>
          <div className={styles.techGrid}>
            {technologies.map((tech, index) => (
              <div key={index} className={styles.techCard}>
                <div className={styles.techHeader}>
                  <h3 className={styles.techName}>{tech.name}</h3>
                  <span className={styles.techCategory}>{tech.category}</span>
                </div>
                <p className={styles.techDescription}>{tech.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.architecture}>
          <h2 className={styles.sectionTitle}>Architecture & Features</h2>
          <div className={styles.architectureContent}>
            <div className={styles.featureList}>
              <div className={styles.feature}>
                <h4>Modern React Patterns</h4>
                <p>Utilizes React 19 features including improved concurrent rendering and enhanced hooks.</p>
              </div>
              <div className={styles.feature}>
                <h4>Type Safety</h4>
                <p>Full TypeScript implementation with strict type checking and excellent IDE support.</p>
              </div>
              <div className={styles.feature}>
                <h4>Modular Styling</h4>
                <p>Sass modules for component-scoped styles with a comprehensive design system.</p>
              </div>
              <div className={styles.feature}>
                <h4>Developer Experience</h4>
                <p>Hot module replacement, TypeScript support, and excellent debugging tools.</p>
              </div>
              <div className={styles.feature}>
                <h4>Production Ready</h4>
                <p>Optimized builds, code splitting, and CI/CD pipeline for automated deployments.</p>
              </div>
              <div className={styles.feature}>
                <h4>Custom Domain</h4>
                <p>Deployed on GitHub Pages with custom domain configuration and SSL certificates.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}