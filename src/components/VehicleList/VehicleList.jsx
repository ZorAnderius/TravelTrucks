import { useSelector } from "react-redux";
import { selectVehicles } from "../../redux/vehicle/selector";
import Vehicle from "../Vehicle/Vehicle";
import Button from "../Button/Button";

import styles from "./VehicleList.module.css";
import {useState } from "react";

const perPage = 4;

const VehicleList = () => {
  const [visibleVehicle, setVisibleVehicle] = useState(perPage);
  const vehicles = useSelector(selectVehicles);

  const handleClick = () => {
    setVisibleVehicle((prevPage) => prevPage + perPage);
  };

  
  return (
    <div className={styles.catalogWrapper}>
      {vehicles?.length > 0 && (
        <ul className={styles.vehicleContainer}>
          {vehicles?.slice(0, visibleVehicle).map((vehicle) => (
            <li key={vehicle.id} className={styles.vehicleCard}>
              <Vehicle vehicle={vehicle} />
            </li>
          ))}
        </ul>
      )}
      {visibleVehicle < vehicles.length && (
        <Button styleProp="loadMore" handleClick={handleClick}>
          LoadMore
        </Button>
      )}
    </div>
  );
};

export default VehicleList;
