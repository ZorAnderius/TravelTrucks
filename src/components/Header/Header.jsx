import { useRef, useState } from 'react';
import clsx from 'clsx';
import Container from '../Container/Container';
import HeaderObserver from './HeaderObserver/HeaderObserver';
import Navigation from './Navigation/Navigation';
import styles from './Header.module.css';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef(null);
  return (
    <>
      <HeaderObserver ref={observerRef} setVisible={setIsVisible} />
      <header className={clsx(styles.header, !isVisible && styles.fixed)}>
        <Container>
          <Navigation />
        </Container>
      </header>
    </>
  );
};

export default Header;
