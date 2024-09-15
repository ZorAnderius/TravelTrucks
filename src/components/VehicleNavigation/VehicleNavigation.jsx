import { NavLink } from "react-router-dom"
import { ROUTES_NAME } from "../../helpers";
import styles from './VehicleNavigation.module.css';
import clsx from "clsx";

const buildActive = ({isActive}) => 
  clsx(styles.navLink, isActive && styles.activeLink);

const VehicleNavigation = () => {
  return (
    <ul className={styles.detailNavigation}>
      <li className={styles.detailItem}>
        <NavLink to={ROUTES_NAME.vehicleFeature} className={buildActive}>Features</NavLink>
      </li>
      <li>
        <NavLink to={ROUTES_NAME.vehicleReview} className={buildActive}>Reviews</NavLink>
      </li>
    </ul>
  );
}

export default VehicleNavigation