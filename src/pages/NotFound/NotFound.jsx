import { Container, LinkButton, Section } from "../../components";
import { ROUTES_NAME } from "../../helpers";
import something_wrong from '../../assets/something_wrong.gif';
import styles from './NotFound.module.css';
import React from "react";

const NotFound = React.memo(() => {
  return (
    <Section>
      <Container>
        <div className={styles.notFoundContainer}>
          <h1>Opps...Something went wrong. Please try again</h1>
          <LinkButton to={ROUTES_NAME.home}>Go to Home</LinkButton>
          <img src={something_wrong} alt='Something went wrong' />
        </div>
      </Container>
    </Section>
  );
});

NotFound.displayName = "NotFound";

export default NotFound;
