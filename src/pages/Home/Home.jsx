import React from 'react';
import { Container, LinkButton, Section } from '../../components';
import { ROUTES_NAME } from '../../helpers/constants/routesVariable';
import styles from './Home.module.css';

const Home = React.memo(() => {
  return (
    <main className={styles.hero}>
      <Section>
        <Container>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Campers of your dreams</h1>
            <p className={styles.heroSubtitle}>
              You can find everything you want in our catalog
            </p>
            <LinkButton type="btn" link={ROUTES_NAME.catalog}>
              View Now
            </LinkButton>
          </div>
        </Container>
      </Section>
    </main>
  );
});

Home.displayName = 'Home';

export default Home;
