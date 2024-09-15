import { useSelector } from "react-redux";
import VehicleFacilities from "../VehicleFacilities/VehicleFacilities";
import { selectCurrentVehicle } from "../../redux/vehicle/selector";

import { convertFacilitiesBadge, convertVehicleDetails } from "../../helpers";
import styles from "./VehicleFeature.module.css";
import Title from "../Title/Title";

const VehicleFeature = () => {
  const vehicle = useSelector(selectCurrentVehicle);
  const facilities = convertFacilitiesBadge(vehicle);
  const vehicleDetails = convertVehicleDetails(vehicle);
  
  return (
    <div className={styles.featuresContainer}>
      {facilities?.length > 0 && (
        <ul className={styles.featureFacilities}>
          {facilities?.map((facility) => (
            <li key={facility.id} className={styles.facilityItem}>
              <VehicleFacilities info={facility} />
            </li>
          ))}
        </ul>
      )}
      <div className={styles.vehicleDetails}>
        <Title>Vehicle details</Title>
        {vehicleDetails?.length > 0 && (
          <ul className={styles.detailsList}>
            {vehicleDetails?.map(({ feature, title, id }) => (
              <li key={id} className={styles.detailsItem}>
                <p>{title}</p>
                <p>{feature}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default VehicleFeature;
