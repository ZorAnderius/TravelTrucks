import React from 'react';
import { Container, LinkButton, Section } from '../../components';
import { ROUTES_NAME } from '../../helpers';
import something_wrong from '../../assets/something_wrong.gif';
import styles from './NotFound.module.css';

const NotFound = React.memo(() => {
  return (
    <Section>
      <Container>
        <div className={styles.notFoundContainer}>
          <h1 className={styles.titleError}>
            Opps...Something went wrong. <span>Please try again</span>
          </h1>
          <LinkButton link={ROUTES_NAME.home} type="btn">
            Go to Home
          </LinkButton>
          <img src={something_wrong} alt="Something went wrong" />
        </div>
      </Container>
    </Section>
  );
});

NotFound.displayName = 'NotFound';

export default NotFound;
