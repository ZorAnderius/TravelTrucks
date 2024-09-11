import Container from "../Container/Container";
import styles from './Header.module.css';
import Navigation from "./Navigation/Navigation";

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
