import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import {
  selectFilteredVehicles,
} from "../../redux/vehicle/selector";
import Vehicle from "../Vehicle/Vehicle";
import Button from "../Button/Button";

import styles from "./VehicleList.module.css";

const perPage = 4;

const VehicleList = () => {
  const [visibleVehicle, setVisibleVehicle] = useState(perPage);
  const vehicles = useSelector(selectFilteredVehicles);

  const handleClick = () => {
    setVisibleVehicle((prevPage) => prevPage + perPage);
  };

  useEffect(() => {
    setVisibleVehicle(perPage);
  }, [vehicles]);

  return (
    <div className={styles.catalogWrapper}>
      {vehicles?.length > 0 ? (
        <ul className={styles.vehicleContainer}>
          {vehicles?.slice(0, visibleVehicle).map((vehicle) => (
            <li key={vehicle.id} className={styles.vehicleCard}>
              <Vehicle vehicle={vehicle} />
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.noFoundWrapper}>
          <h3 className={styles.noFound}>No vehicles found</h3>
        </div>
      )}

      {visibleVehicle < vehicles?.length && (
        <Button styleProp="loadMore" handleClick={handleClick}>
          LoadMore
        </Button>
      )}
    </div>
  );
};

export default VehicleList;
