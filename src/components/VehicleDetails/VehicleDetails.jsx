import { useSelector } from "react-redux";
import { selectCurrentVehicle } from "../../redux/vehicle/selector";
import { convertVehiclesData } from "../../helpers";
import styles from "./VehicleDetails.module.css";
import clsx from "clsx";

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
  } = convertVehiclesData(vehicle);
  return (
    <div className={styles.vehicleContainer}>
      <div className={styles.vehicleInfoText}>
        <h2 className={styles.titleVehicle}>{name}</h2>
        <div className={styles.vehicleLocationReview}>
          <div className={styles.vehicleRatingContainer}>
            <span className={clsx("icon-rating", styles.rating)}></span>
            <p className={styles.ratingValue}>
              {rating}({reviewsQuantity}{" "}
              {reviewsQuantity <= 1 ? "Review" : "Reviews"})
            </p>
          </div>
          <div className={styles.locationWrapper}>
            <span className="icon-map"></span>
            <p>{location}</p>
          </div>
        </div>
        <p className={styles.priceVehicle}>{price}</p>
      </div>
      <ul className={styles.galleryContainer}>
        {gallery?.map(({ original }, index) => (
          <li key={original + index} className={styles.galleryVehicle}>
            <img src={original} alt={name} className={styles.imgVehicle} />
          </li>
        ))}
      </ul>

      <p className={styles.vehicleDescription}>{description}</p>
    </div>
  );
};

export default VehicleDetails;
