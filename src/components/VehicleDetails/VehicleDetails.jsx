import { useSelector } from "react-redux";
import { selectCurrentVehicle } from "../../redux/vehicle/selector";
import { convertVehiclesData } from "../../helpers";
import styles from "./VehicleDetails.module.css";

const VehicleDetails = () => {
  const vehicle = useSelector(selectCurrentVehicle);
  const {
    name,
    rating,
    reviewsQuantity,
    location,
    price,
    gallery,
    description,
    facilities,
    form,
    length,
    width,
    height,
    thank,
    consumption,
  } = convertVehiclesData(vehicle);
  return (
    <div className={styles.vehicleContainer}>
      <div className={styles.vehicleInfoText}>
        <h2>{name}</h2>
        <div className={styles.vehicleLocationReview}>
          <div className={styles.vehicleRatingContainer}>
            <span className="icon-star"></span>
            <p>
              {rating} ({reviewsQuantity}{" "}
              {reviewsQuantity <= 1 ? "Review" : "Reviews"})
            </p>
          </div>
          <div>
            <span className="icon-location"></span>
            <p>{location}</p>
          </div>
        </div>
      </div>
      <ul className={styles.galleryContainer}>
        {gallery?.map(({ original }, index) => (
          <li key={original + index} className={styles.galleryVehicle}>
            <img src={original} alt={name} className={styles.imgVehicle}/>
          </li>
        ))}
      </ul>

      <p>{description}</p>
    </div>
  );
};

export default VehicleDetails;
