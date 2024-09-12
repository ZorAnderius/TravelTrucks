import { useSelector } from "react-redux";
import { selectVehicles } from "../../redux/vehicle/selector";
import Vehicle from "../Vehicle/Vehicle";

import styles from "./VehicleList.module.css";

const VehicleList = () => {
  const vehicles = useSelector(selectVehicles);
  return vehicles?.length > 0 && (
    <ul className={styles.vehicleContainer}>
      {
        vehicles?.map(vehicle => (
          <li key={vehicle.id} className={styles.vehicleCard}>
            <Vehicle vehicle={vehicle} />
          </li>
        ))
      }
    </ul>
  );
};

export default VehicleList;
