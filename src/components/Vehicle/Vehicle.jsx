import clsx from "clsx";
import LinkButton from "../LinkButton/LinkButton";
import styles from "./Vehicle.module.css";
import { convertVehiclesData } from "../../helpers/convertVehicleData/convertVehiclesData";
import VehicleFacilities from "../VehicleFacilities/VehicleFacilities";
import { useMemo } from "react";

const Vehicle = ({ vehicle }) => {
  const {
    id,
    name,
    imgVehicle,
    price,
    rating,
    reviews,
    location,
    description,
    facilities,
  } = useMemo(() => convertVehiclesData(vehicle), [vehicle]);
  return (
    <>
      <div className={styles.thumbVehicle}>
        <img className={styles.imgVehicle} src={imgVehicle} alt={name} />
      </div>
      <div className={styles.vehicleInfoContainer}>
        <div className={styles.titleContainer}>
          <div className={styles.titleWrap}>
            <h2 className={styles.titleCard}>{name}</h2>
            <div className={styles.priceSubscribe}>
              <p>{price}</p>
              <button className={styles.subscribeBtn}>
                <span className="icon-heart"></span>
              </button>
            </div>
          </div>
          <div className={styles.ratingLocationWrapper}>
            <div className={styles.ratingWrapper}>
              <span className={clsx("icon-rating", styles.rating)}></span>
              <LinkButton styleProp={styles.reviewLink}>
                <p>
                  {rating}({reviews} {reviews <= 1 ? "Review" : "Reviews"})
                </p>
              </LinkButton>
            </div>
            <div className={styles.locationWrapper}>
              <span className="icon-map"></span>
              <p>{location}</p>
            </div>
          </div>
        </div>
        <p className={styles.descriptionCard}>{description}</p>
        <ul className={styles.facilitiesContainer}>
          {facilities?.map((facility) => (
            <li key={facility.id} className={styles.facilitiesItem}>
              <VehicleFacilities info={facility} />
            </li>
          ))}
        </ul>
        <LinkButton>Show more</LinkButton>
      </div>
    </>
  );
};

export default Vehicle;
