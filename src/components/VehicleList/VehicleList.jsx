import { useSelector } from "react-redux";
import { useCallback, useEffect, useRef, useState } from "react";

import { selectFilteredVehicles } from "../../redux/vehicle/selector";
import Vehicle from "../Vehicle/Vehicle";

import styles from "./VehicleList.module.css";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { scrollToLoad } from "../../helpers";

const perPage = 4;
const marginTop = 110;

const VehicleList = () => {
  const [visibleVehicle, setVisibleVehicle] = useState(perPage);
  const vehicles = useSelector(selectFilteredVehicles);
  const loadMoreBtnRef = useRef(null);

  const handleClick = useCallback(() => {
    setVisibleVehicle((prevPage) => prevPage + perPage);
    const scrollPosition =
      document.documentElement.scrollTop +
      loadMoreBtnRef.current?.getBoundingClientRect().top -
      marginTop;
    scrollToLoad(scrollPosition);
  }, [loadMoreBtnRef]);

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
        <LoadMoreBtn ref={loadMoreBtnRef} handleClick={handleClick}>
          LoadMore
        </LoadMoreBtn>
      )}
    </div>
  );
};

export default VehicleList;
