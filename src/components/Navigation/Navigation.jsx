import { Link, NavLink } from "react-router-dom";
import { ROUTES_NAME } from "../../helpers/constants/routes";

const Navigation = () => {
  return (
    <nav>
      <Link to={ROUTES_NAME.home}>
        <span>Travel</span>Trucks
      </Link>
      <ul>
        <li>
          <NavLink to={ROUTES_NAME.home}>Home</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES_NAME.catalog}>Catalog</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
