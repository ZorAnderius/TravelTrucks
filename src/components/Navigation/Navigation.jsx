import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";
import { ROUTES_NAME } from "../../helpers/constants/routes";
import styles from './Navigation.module.css';

const styleBuilder = ({ isActive }) => 
  clsx(styles.navLink, isActive && styles.active);

const Navigation = () => {
  return (
    <nav className={styles.navContainer}>
      <Link to={ROUTES_NAME.home} className={styles.navLogo}>
        <span>Travel</span>Trucks
      </Link>
      <ul className={styles.navList}>
        <li>
          <NavLink to={ROUTES_NAME.home} className={styleBuilder}>Home</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES_NAME.catalog} className={styleBuilder}>Catalog</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
