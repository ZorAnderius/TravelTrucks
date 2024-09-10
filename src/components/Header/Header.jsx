import Container from "../Container/Container";
import Navigation from "../Navigation/Navigation";
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <Navigation />
      </Container>
    </header>
  );
};

export default Header;
