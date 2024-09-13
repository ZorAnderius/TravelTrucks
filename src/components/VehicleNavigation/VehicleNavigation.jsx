import { NavLink } from "react-router-dom"
import { ROUTES_NAME } from "../../helpers";


const VehicleNavigation = () => {
  return (
    <ul>
      <li>
        <NavLink to={ROUTES_NAME.vehicleFeature}>Features</NavLink>
      </li>
      <li>
        <NavLink to={ROUTES_NAME.vehicleReview}>Reviews</NavLink>
      </li>
    </ul>
  );
}

export default VehicleNavigation